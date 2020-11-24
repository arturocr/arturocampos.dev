import Document, { Html, Head, Main, NextScript } from 'next/document';
import { domain } from '@/lib/constants';
import theme from '@/lib/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin=''
          />
          <link rel='preconnect' href='https://arturocampos.goatcounter.com' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/safari-pinned-tab.svg'
            color={theme.colors.primary}
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              // Only load on production environment.
              if (window.location.host !== '${domain}') {
                window.goatcounter = {no_onload: true};
              }
              `,
            }}
          />
          <script
            async
            data-goatcounter='https://arturocampos.goatcounter.com/count'
            src='//gc.zgo.at/count.js'
          ></script>
        </Head>
        <body className='text-gray-700 body-font'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
