/* eslint-disable jsx-quotes */
import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html
      lang='he'
      dir='rtl'
      style={{
        height: '100%',
      }}
    >
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Heebo:wght@100;200&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body
        style={{
          minHeight: '100vh',
        }}
      >
        <Main />
        <NextScript />
        <style>{`
          #__next {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </body>
    </Html>
  );
}

export default Document;
