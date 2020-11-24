import { domain } from '@/lib/constants';

const pageView = url => {
  if (window?.location?.host === domain) {
    window.goatcounter?.count({
      path: url,
    });
  }
};

const getPathViews = async path => {
  try {
    const views = await fetch(
      `https://arturocampos.goatcounter.com/counter/${encodeURIComponent(
        path
      )}.json`
    );
    const { count_unique } = await views.json();
    return count_unique;
  } catch (_) {
    return 0;
  }
};

export { pageView, getPathViews };
