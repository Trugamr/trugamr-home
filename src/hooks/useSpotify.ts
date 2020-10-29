import useSwr, { mutate } from 'swr'
import axios from 'axios'

const fetchNowPlaying : () => Promise<SpotifyData> = async () => {
  const response = await axios.get('/api/spotify')
  const { data } = response.data
  return data
}

const useSpotify = (refreshInterval = 60000) => {
  const { data, error } = useSwr('/api/spotify', fetchNowPlaying, {
    refreshInterval,
  })

  return { data, error, forceRefresh: () => mutate('/api/spotify') }
}

export default useSpotify
