import axios from 'axios'
import { queryCache, useQuery } from 'react-query'

export const fetchNowPlaying = async (
  key: string,
  host: string = '',
): Promise<SpotifyData> => {
  const response = await axios.get(`${host}/api/spotify`)
  const { data } = response.data
  return data
}

const useSpotify = (
  initialData: SpotifyData = null,
  refetchInterval = 60000,
) => {
  const { data, error } = useQuery('spotify', fetchNowPlaying, {
    refetchInterval,
    initialData,
    initialStale: true,
  })

  return {
    data,
    error,
    forceRefresh: async () => {
      await queryCache.invalidateQueries('spotify')
    },
  }
}

export default useSpotify
