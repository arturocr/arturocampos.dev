import Image from 'next/image';

import Vimeo from '@/components/vimeo';
import YouTube from '@/components/youtube';

const checkForComponentUse = (tagName, str) => {
  const exp = new RegExp(`<${tagName}`);
  return exp.test(str);
};

// Contains the list of components that can be embed in MDX files
const components = {
  Image,
  Vimeo,
  YouTube,
};

const currencyFormatter = number =>
  `₡${parseFloat(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

// Returns an array with the components names found in a specific blog post
const getHydrationComponentsList = content => {
  return Object.keys(components).filter(compKey => {
    return checkForComponentUse(compKey, content);
  });
};

// Returns an object with the components required to render a blog post
const getComponents = (hydrationComponentsList = []) => {
  const componentsList = {};
  hydrationComponentsList.forEach(componentName => {
    componentsList[componentName] = components[componentName];
  });
  return componentsList;
};

// Returns the localized path given a locale and a path
const getLocalizedPath = ({ defaultLocale, locale, asPath: path }) => {
  return `${defaultLocale == locale ? '' : `/${locale}`}${path}`;
};

export {
  currencyFormatter,
  getComponents,
  getHydrationComponentsList,
  getLocalizedPath,
};
