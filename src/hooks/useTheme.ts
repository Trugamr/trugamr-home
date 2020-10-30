import { ThemeContext } from 'contexts/theme.context'
import { Theme, ThemeTypes } from 'global'
import { useContext } from 'react'
import { lightTheme, darkTheme } from 'theme'

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const useTheme = (): [Theme, (themeName: ThemeTypes) => void] => {
  const [theme, setCurrentTheme] = useContext(ThemeContext)
  const setTheme = (themeName: ThemeTypes): void =>
    setCurrentTheme(themes[themeName])

  return [theme, setTheme]
}

export default useTheme
