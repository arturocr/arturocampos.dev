import { description, siteBaseUrl, title } from '@/lib/constants';

const SEO = {
  title,
  description,
  canonical: siteBaseUrl,
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteBaseUrl,
    title,
    description,
    images: [
      {
        url: `${siteBaseUrl}/images/og.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@arturocr',
    site: '@arturocr',
    cardType: 'summary_large_image',
  },
};

export default SEO;
