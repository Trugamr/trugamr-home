/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { FaSpotify } from 'react-icons/fa'
import {
  Container,
  Wrapper,
  Artwork,
  Info,
  SpotifyLink,
  Progress,
} from './spotify-playing.styles'

const formatArtistsName = artists => {
  const arr = artists.slice(0, 2)
  return arr.reduce(
    (acc, artist, index) =>
      (acc += `${artist.name}${arr.length === index + 1 ? '' : ', '}`),
    '',
  )
}

const SpotifyPlaying = ({ data, forceRefresh }) => {
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
    if (progress >= durationMs + 2000) forceRefresh()
    const timeoutId = setTimeout(() => setProgress(progress + 1000), 1000)
    return () => clearTimeout(timeoutId)
  }, [progress])

  return (
    <Wrapper>
      {isPlaying && <Progress value={progress} max={durationMs} />}
      <Container>
        <Artwork src={images[1]['url']} />
        <Info>
          <p>{name}</p>
          <span>{formatArtistsName(artists)}</span>
          <span>{albumName === name ? 'Single' : albumName}</span>
        </Info>
        <SpotifyLink target="_blank" href={url}>
          <FaSpotify color="#1DB954" size={18} />
        </SpotifyLink>
      </Container>
    </Wrapper>
  )
}

export default SpotifyPlaying
