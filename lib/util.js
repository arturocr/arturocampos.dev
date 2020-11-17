import { siteBaseUrl } from '../next-seo.config.js';

const getLocalizedUrl = ({ defaultLocale, locale, asPath: path }) => {
  return `${siteBaseUrl}${defaultLocale == locale ? '' : `/${locale}`}${path}`;
};

export { getLocalizedUrl };
