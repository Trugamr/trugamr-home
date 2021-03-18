/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { FunctionComponent } from 'react'
import theme from '../theme'
import '../styles/globals.css'

const App: FunctionComponent<{
  Component: FunctionComponent
  pageProps: {}
}> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
