/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import RainbowText from 'components/rainbow-text.component'

const Home = () => {
  return (
    <div>
      <Head>
        <title>trugamr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RainbowText text="trugamr" fontSize={80} />
      </main>
    </div>
  )
}

export default Home
