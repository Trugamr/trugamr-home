import { ThemeProvider as ThemeUIProvider } from 'theme-ui'

import {
  FunctionComponent,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
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

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      <ThemeUIProvider theme={currentTheme}>{children}</ThemeUIProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
