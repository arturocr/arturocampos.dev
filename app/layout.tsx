import type { Metadata } from 'next';
import Script from 'next/script';

import Analytics from '@/components/analytics';
import { GA_TRACKING_ID } from '@/lib/gtag';
import { description, siteBaseUrl, title } from '@/lib/constants';

import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/prism.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: title,
    template: `%s - Arturo Campos`,
  },
  description,
  openGraph: {
    type: 'website',
    url: siteBaseUrl,
    title,
    description,
    images: [
      {
        url: '/images/og.png',
        width: 1280,
        height: 720,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@arturocr',
    site: '@arturocr',
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#3f425e',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=optional'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata&display=optional'
          rel='stylesheet'
        />
        {process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
            crossOrigin='anonymous'
          />
        )}
      </head>
      <body className='text-gray-700 body-font selection:bg-secondary/40 md:before:fixed md:before:z-50 md:before:p-2 md:before:top-0 md:before:left-0 md:before:right-0 md:before:bg-gradient-to-r md:before:from-secondary md:before:via-middle md:before:to-accent md:after:fixed md:after:top-0 md:after:bottom-0 md:after:left-0 md:after:z-50 md:after:p-2 md:after:bg-secondary relative z-0 flex flex-col items-stretch min-h-screen bg-white'>
        {children}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy='afterInteractive'
            />
            <Script id='gtag-init' strategy='afterInteractive'>
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');`}
            </Script>
          </>
        )}
        <Analytics />
      </body>
    </html>
  );
}
