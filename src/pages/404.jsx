/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import RainbowText from 'components/rainbow-text.component.jsx'
import { useEffect } from 'react'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    const timeoutId = setTimeout(() => router.push('/'), 4000)
    return () => clearInterval(timeoutId)
  })

  return (
    <div>
      <Head>
        <title>Not Found :(</title>
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
        <RainbowText text="404" fontSize={100} />
        <p>The resource you were looking for doesn't exist.</p>
        <Link href="/">
          <a
            sx={{
              color: 'primary',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            back home
          </a>
        </Link>
      </main>
    </div>
  )
}

export default NotFound
