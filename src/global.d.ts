import { Theme as ThemeUITheme } from 'theme-ui'

declare type ThemeTypes = 'light' | 'dark'

declare interface Theme extends ThemeUITheme {
  name: ThemeTypes
  spotify?: {
    title?: string
    artist?: string
    album?: string
    progress?: string
    background?: string
  }
}