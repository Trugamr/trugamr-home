import { ThemeProvider as ThemeUIProvider } from 'theme-ui'
import {
  FunctionComponent,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react'
import { lightTheme, darkTheme } from 'theme'
import { Theme } from 'global'

export const ThemeContext = createContext<
  [Theme, Dispatch<SetStateAction<Theme>>]
>([
  darkTheme,
  () => {
    throw new Error('setCurrent function must be overridden')
  },
])

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  // Fetch from localstorage
  useEffect(() => {
    let themeName = localStorage.getItem('themeName')
    // Fetch system scheme maybe ?
    if (['dark', 'light'].includes(themeName))
      setCurrentTheme(themes[themeName])
  }, [])

  // Set theme to localstorage
  useEffect(() => {
    localStorage.setItem('themeName', currentTheme.name)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <ThemeUIProvider theme={currentTheme}>{children}</ThemeUIProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
