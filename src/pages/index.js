/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import RainbowText from 'components/rainbow-text.component'
import SpotifyPlaying from 'components/spotify-playing.component'

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
        <RainbowText text="trugamr" fontSize={60} />
        <SpotifyPlaying />
      </main>
    </div>
  )
}

export default Home
