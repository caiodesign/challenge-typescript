import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { PortalsProvider } from 'context/portals'

import { Theme, GlobalStyles } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Head>
          <title>Grupo ZAP - Real Estate</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <meta
            name="description"
            content="Grupo ZAP - Real Estate. Search a property for you!"
          />
        </Head>
        <GlobalStyles />
        <PortalsProvider>
          <Component {...pageProps} />
        </PortalsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
