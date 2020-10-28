/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import RainbowText from 'components/rainbow-text.component'
import SpotifyPlaying from 'components/spotify-playing.component'

const Home = () => {
  return (
    <div
      sx={{
        height: '100vh',
      }}
    >
      <Head>
        <title>trugamr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <RainbowText text="trugamr" fontSize={60} />
        <div
          sx={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
        >
          <SpotifyPlaying />
        </div>
      </main>
    </div>
  )
}

export default Home
