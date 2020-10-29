import useSwr, { mutate } from 'swr'
import axios from 'axios'

const fetchNowPlaying = async () => {
  const response = await axios.get('/api/spotify')
  const { data } = response.data
  return data
}

const useSpotify = (refreshInterval = 60000) => {
  const { data, error } = useSwr('/api/spotify', fetchNowPlaying, {
    refreshInterval,
  })

  if (data && data.isOffline) {
    error = 'Nothing is being played'
  }

  return { data, error, forceRefresh: () => mutate('/api/spotify') }
}

export default useSpotify
