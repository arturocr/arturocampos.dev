const currencyFormatter = (number: number): string =>
  `₡${parseFloat(String(number))
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

// Returns the localized path for a given locale and path
const getLocalizedPath = (locale: string, path: string): string => {
  return locale === 'en' ? path : `/${locale}${path}`;
};

export { currencyFormatter, getLocalizedPath };
