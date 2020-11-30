import { domain } from '@/lib/constants';

const pageView = url => {
  if (window?.location?.host === domain) {
    window.goatcounter?.count({
      path: url,
    });
  }
};

export { pageView };
