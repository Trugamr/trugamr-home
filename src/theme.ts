import { deep, roboto } from '@theme-ui/presets'
import { merge, Theme } from 'theme-ui'

export default merge(deep, {
  initialColorModeName: 'dark',
  colors: {
    background: '#0d0d15',
    text: deep.colors.text,
    muted: '#161623',
    gray: '#e8e8e8',
    lightgray: '#d0d0d0',
    modes: {
      light: {
        ...roboto.colors,
        text: '#131314',
        primary: '#ff8af1',
        gray: '#18181a',
        lightgray: '#1c1c1f',
      },
    },
  },
})

// DARK THEME

// const darkColors = {
//   ...deep.colors,
//   background: '#0d0d15',
//   muted: '#161623',
// }

// const darkSpotify = {
//   title: darkColors.text,
//   artist: '#e8e8e8',
//   album: '#d0d0d0',
//   progress: darkColors.primary,
//   background: darkColors.muted,
// }

// LIGHT THEME

// const lightColors = {
//   ...roboto.colors,
//   primary: '#ff8af1',
//   text: '#131314',
// }

// const lightSpotify = {
//   title: lightColors.text,
//   artist: '#18181a',
//   album: '#1c1c1f',
//   progress: lightColors.primary,
//   background: lightColors.muted,
// }

// export const lightTheme: Theme = {
//   name: 'light',
//   ...roboto,
//   colors: lightColors,
//   spotify: lightSpotify,
// }
