import { deep } from '@theme-ui/presets'
import { Theme } from 'theme-ui'

const theme: Theme = {
  ...deep,
  colors: {
    ...deep.colors,
    background: '#0d0d15',
    muted: '#161623',
  },
}

export default theme
