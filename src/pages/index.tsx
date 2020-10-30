/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import useSpotify from 'hooks/useSpotify'
import RainbowText from 'components/rainbow-text/rainbow-text.component'
import SpotifyPlaying from 'components/spotify-playing/spotify-playing.component'
import useTheme from 'hooks/useTheme'
import Navbar from 'components/navbar/navbar.component'

const Home = () => {
  const { data: spotifyData, error, forceRefresh } = useSpotify()

  return (
    <div
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Head>
        <title>trugamr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar title="🌊🌸" />

      <main
        sx={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
          flexGrow: 1,
        }}
      >
        <RainbowText text="trugamr" fontSize={60} />
        {/* Render spotify width when there is data */}
        {!error && spotifyData && !spotifyData.isOffline ? (
          <div
            sx={{
              position: 'absolute',
              right: 16,
              bottom: 16,
            }}
          >
            <SpotifyPlaying data={spotifyData} forceRefresh={forceRefresh} />
          </div>
        ) : null}
      </main>
    </div>
  )
}

export default Home
