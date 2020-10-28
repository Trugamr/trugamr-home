/** @jsx jsx */
import { jsx } from 'theme-ui'
import useSwr from 'swr'
import axios from 'axios'
import { FaSpotify } from 'react-icons/fa'

const fetchNowPlaying = async () => {
  const response = await axios.get('/api/spotify')
  const { data } = response.data
  return data
}

const formatArtistsName = artists =>
  artists.reduce(
    (acc, artist, index) =>
      (acc += `${artist.name}${artists.length === index + 1 ? '' : ', '}`),
    '',
  )

const SpotifyPlaying = () => {
  const { data, error } = useSwr('/api/spotify', fetchNowPlaying)

  // Failed to get spotify data
  if (error) {
    console.log('Failed to load spotify widget', error)
    return <h3>Error</h3>
  }

  // Loading
  if (!data) return <h3>Loading</h3>

  // TODO: Do something with isPlaying
  const { albumName, name, artists, images, url } = data

  return (
    <div
      sx={{
        backgroundColor: 'muted',
        position: 'relative',
        width: 300,
        height: 100,
        borderRadius: 20,
        padding: 12,
        display: 'flex',
      }}
    >
      <img
        sx={{
          height: 76,
          borderRadius: 14,
        }}
        src={images[1]['url']}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Montserrat',
          fontWeight: '500',
          flexGrow: 1,
          paddingLeft: 12,
          width: 100,
          justifyContent: 'center',
        }}
      >
        <span
          sx={{
            margin: 0,
            fontWeight: '600',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 17,
          }}
        >
          {name}
        </span>
        <span
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 14,
            color: '#E1E1E1',
            paddingRight: 20,
          }}
        >
          {formatArtistsName(artists)}
        </span>
        <span
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 14,
            color: '#D8D8D8',
            paddingRight: 30,
          }}
        >
          {albumName === name ? 'Single' : albumName}
        </span>
      </div>
      <a target="_blank" href={url}>
        <FaSpotify
          sx={{
            position: 'absolute',
            right: 12,
            bottom: 12,
          }}
          color="#1DB954"
          size={18}
        />
      </a>
    </div>
  )
}

export default SpotifyPlaying
