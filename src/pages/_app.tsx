/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import 'styles/globals.css'
import theme from '../theme'
import { FunctionComponent } from 'react'

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
