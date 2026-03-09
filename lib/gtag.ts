import type { GTagEventParams } from '../types';

export const GA_TRACKING_ID = 'G-6G3N0D1P0E';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, title: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: GTagEventParams): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
