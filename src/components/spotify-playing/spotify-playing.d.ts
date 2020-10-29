interface Artist {
  id: string
  name: string
  type: string
  uri: string
}

interface ArtworkImage {
  height: number
  width: number
  url: string
}

interface SpotifyData {
  isOffline: boolean
  isPlaying: boolean
  durationMs: number
  progressMs: number
  name: string
  uri: string
  id: string
  images: ArtworkImage[]
  albumName: string
  url: string
  artists: Artist[]
  currentlyPlayingType: string
}
