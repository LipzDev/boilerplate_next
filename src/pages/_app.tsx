/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Titulo</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default App;
