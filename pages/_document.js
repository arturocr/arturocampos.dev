import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head />
        <body className='font-firago hyphens-manual'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
