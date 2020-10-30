import { deep, roboto } from '@theme-ui/presets'
import { Theme } from 'global'

const darkColors = {
  ...deep.colors,
  background: '#0d0d15',
  muted: '#161623',
}

const darkSpotify = {
  title: darkColors.text,
  artist: '#e8e8e8',
  album: '#d0d0d0',
  progress: darkColors.primary,
  background: darkColors.muted,
}

export const darkTheme: Theme = {
  name: 'dark',
  ...deep,
  colors: darkColors,
  spotify: darkSpotify,
}

// LIGHT THEME

const lightColors = {
  ...roboto.colors,
  primary: '#ff8af1',
  text: '#131314',
}

const lightSpotify = {
  title: lightColors.text,
  artist: '#18181a',
  album: '#1c1c1f',
  progress: lightColors.primary,
  background: lightColors.muted,
}

export const lightTheme: Theme = {
  name: 'light',
  ...roboto,
  colors: lightColors,
  spotify: lightSpotify,
}
