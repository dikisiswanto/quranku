import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import app from '../data/app.json';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content={app.description} />
          <meta name="theme-color" content={app.theme_color} />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=family=Source+Sans+Pro:wght@400;600;700&display=swap" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
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
