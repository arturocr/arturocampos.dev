import { domain } from '@/lib/constants';

const pageView = url => {
  if (window?.location?.host === domain) {
    window.goatcounter?.count({
      path: url,
    });
  }
};

const getViewsEndpoint = path =>
  `https://arturocampos.goatcounter.com/counter/${encodeURIComponent(
    path
  )}.json`;

export { pageView, getViewsEndpoint };
