import Head from 'next/head'
import RainbowText from 'components/rainbow-text.component'

const Home = () => {
  return (
    <div>
      <Head>
        <title>^_^</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello</h1>
        <p>ji</p>
        <RainbowText />
      </main>
    </div>
  )
}

export default Home
