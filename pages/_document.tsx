import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,700;1,400&family=Noto+Sans+TC:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="google-site-verification" content="euxQfgB1kocft1aAih9vgsEUkdw4Ljk2wGJHKLzzPUk" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
