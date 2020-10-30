import { useColorMode, useThemeUI } from 'theme-ui'

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

const useThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  const toggleTheme = () => {
    setColorMode(colorMode === Themes.DARK ? Themes.LIGHT : Themes.DARK)
  }

  return { colorMode, toggleTheme }
}

export default useThemeToggle
