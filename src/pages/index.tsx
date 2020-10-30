/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'
import useSpotify from 'hooks/useSpotify'
import RainbowText from 'components/rainbow-text/rainbow-text.component'
import SpotifyPlaying from 'components/spotify-playing/spotify-playing.component'
import Navbar from 'components/navbar/navbar.component'
import { Wrapper, Container, Widgets, Content } from 'styles/index.styles'

const Home = () => {
  const { data: spotifyData, error, forceRefresh } = useSpotify()

  return (
    <Wrapper>
      <Head>
        <title>trugamr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar title="🌊🌸" />
        <Content>
          <RainbowText text="trugamr" fontSize={60} />
        </Content>
        <Widgets>
          {
            /* Render spotify width when there is data */
            !error && spotifyData && !spotifyData.isOffline ? (
              <SpotifyPlaying data={spotifyData} forceRefresh={forceRefresh} />
            ) : null
          }
        </Widgets>
      </Container>
    </Wrapper>
  )
}

export default Home
