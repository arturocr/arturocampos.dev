export const GA_TRACKING_ID = 'G-6G3N0D1P0E';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url, title) => {
  setTimeout(() => {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_title: title,
    });
  }, 0);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  setTimeout(() => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }, 0);
};
