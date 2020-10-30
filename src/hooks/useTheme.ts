import { ThemeContext } from 'contexts/theme.context'
import { Theme, ThemeTypes } from 'global'
import { useContext } from 'react'
import { lightTheme, darkTheme } from 'theme'

type useThemeType = () => [Theme, () => void, (themeName: ThemeTypes) => void]

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const useTheme: useThemeType = () => {
  const [theme, setCurrentTheme] = useContext(ThemeContext)
  const setTheme = (themeName: any): void => setCurrentTheme(themes[themeName])

  const toggleTheme = () => {
    if (theme.name === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return [theme, toggleTheme, setTheme]
}

export default useTheme
