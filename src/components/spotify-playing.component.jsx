/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FaSpotify } from 'react-icons/fa'

const SpotifyPlaying = () => {
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
        src="https://i.scdn.co/image/ab67616d00001e023fc1efbe18d69f86b4c9145d"
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
          Mellow
        </span>
        <span
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 14,
            color: '#E1E1E1',
            paddingRight: 10,
          }}
        >
          The Lightyears Explode
        </span>
        <span
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: 14,
            color: '#D8D8D8',
            paddingRight: 20,
          }}
        >
          Mello
        </span>
      </div>
      <FaSpotify
        sx={{
          position: 'absolute',
          right: 12,
          bottom: 12,
        }}
        color="#1DB954"
        size={18}
      />
    </div>
  )
}

export default SpotifyPlaying
