const title = 'Arturo Campos – Front-end Developer';
const description =
  'Front-end developer, JavaScript enthusiast, and proud father';
const siteBaseUrl = 'https://arturocampos.dev';

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

export { siteBaseUrl };
export default SEO;
