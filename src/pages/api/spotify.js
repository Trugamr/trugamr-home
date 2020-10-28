import nc from 'next-connect'
import axios from 'axios'
import qs from 'qs'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

const {
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} = process.env

// TODO: Implement redis cache
let accessToken =
  'BQA9B3kHiP5fc1FwmEs-JudoxZW_2dKnsnWSYAigCuFti3jYavk8BKdcmmh---u6jMu4S82CDBdjUzYkhDXGKLXwxqv_s63F1-XlTdGAN-gDMKHXkg2glFn6YB6I3hiLVcJ1KhLUtkfLEbR5tI1kCh5Gd1sEog'

const spotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    authorization: `Bearer ${'xd'}`,
  },
})

const accessTokenRefresh = async failedReq => {
  const response = await axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Basic ${Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
      ).toString('base64')}`,
    },
    data: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })

  const { access_token } = response.data
  accessToken = access_token
  failedReq.config.headers['authorization'] = `Bearer ${accessToken}`

  return Promise.resolve()
}

// Add interceptor to spotify axios instance
createAuthRefreshInterceptor(spotify, accessTokenRefresh)

const handler = nc().get(async (req, res) => {
  try {
    const response = await spotify.get('/me/player/currently-playing')
    const {
      is_playing,
      currently_playing_type,
      progress_ms,
      item: { album, artists, name },
    } = response.data
    const { duration_ms, id, name: albumName, uri, images } = album

    res.json({
      data: {
        isPlaying: is_playing,
        currentlyPlayingType: currently_playing_type,
        durationMs: duration_ms,
        progressMs: progress_ms,
        name,
        uri,
        id,
        images,
        albumName,
        artists: artists.map(({ id, name, type, uri }) => ({
          id,
          name,
          type,
          uri,
        })),
      },
    })
  } catch (error) {
    res.status(501).json({
      error: 'Something went wrong',
    })
    console.log('ERROR', error, error.response)
  }
})

export default handler
