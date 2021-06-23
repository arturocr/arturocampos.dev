import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/gtag';
import theme from '@/lib/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=optional'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inconsolata&display=optional'
            rel='stylesheet'
          />
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_TRACKING_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `,
                }}
              />
            </>
          ) : null}
        </Head>
        <body className='text-gray-700 body-font selection:bg-secondary/40 md:before:fixed md:before:z-50 md:before:p-2 md:before:top-0 md:before:left-0 md:before:right-0 md:before:bg-gradient-to-r md:before:from-secondary md:before:via-middle md:before:to-accent md:after:fixed md:after:top-0 md:after:bottom-0 md:after:left-0 md:after:z-50 md:after:p-2 md:after:bg-secondary'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
