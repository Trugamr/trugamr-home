/** @jsx jsx */
import { jsx } from 'theme-ui'
import ThemeProvider from 'contexts/theme.context'
import 'styles/globals.css'
import { FunctionComponent } from 'react'

const App: FunctionComponent<{
  Component: FunctionComponent
  pageProps: {}
}> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
