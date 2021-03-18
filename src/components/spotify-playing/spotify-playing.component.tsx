/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect, FunctionComponent } from 'react'
import { FaSpotify } from 'react-icons/fa'
import {
  Container,
  Wrapper,
  Artwork,
  Info,
  SpotifyLink,
  Progress,
} from './spotify-playing.styles'

interface IProps {
  data: SpotifyData
  forceRefresh: () => Promise<any>
}

const formatArtistsName: (artists: Artist[]) => string = artists => {
  const arr = artists.slice(0, 2)
  return arr.reduce(
    (acc, artist, index) =>
      (acc += `${artist.name}${arr.length === index + 1 ? '' : ', '}`),
    '',
  )
}

const SpotifyPlaying: FunctionComponent<IProps> = ({ data, forceRefresh }) => {
  const {
    albumName,
    name,
    artists,
    images,
    url,
    progressMs,
    durationMs,
    isPlaying,
  } = data
  const [progress, setProgress] = useState(progressMs)

  useEffect(() => {
    setProgress(progressMs)
  }, [progressMs])

  useEffect(() => {
    if (progress >= durationMs) forceRefresh()

    const timeoutId = setTimeout(() => {
      setProgress(progress < durationMs ? progress + 1000 : progress)
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [progress])

  return (
    <Wrapper sx={{ variant: 'spotify', backgroundColor: 'muted' }}>
      {isPlaying && (
        <Progress
          sx={{
            background: theme =>
              `linear-gradient(to right, ${theme.colors.primary} 90%, transparent 100%)`,
          }}
          value={progress}
          max={durationMs}
        />
      )}
      <Container>
        <Artwork src={images[1]['url']} />
        <Info>
          <p>{name}</p>
          <span sx={{ color: 'gray' }}>{formatArtistsName(artists)}</span>
          <span sx={{ color: 'lightgray' }}>
            {albumName === name ? 'Single' : albumName}
          </span>
        </Info>
        <SpotifyLink target="_blank" href={url}>
          <FaSpotify color="#1DB954" size={18} />
        </SpotifyLink>
      </Container>
    </Wrapper>
  )
}

export default SpotifyPlaying
