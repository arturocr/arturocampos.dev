import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang='en-US'>
        <Head />
        <body className='font-firago hyphens-manual'>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
