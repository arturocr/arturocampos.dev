export const GA_TRACKING_ID = undefined;

export const pageview = () => {
  console.log(`Pageview triggered for ${window.location.pathname}`);
};

export const event = ({
  action = '',
  category = '',
  label = '',
  value = '',
}) => {
  console.log(
    `Event for category ${category} and action ${action} triggered. With label ${label} and value ${value}`
  );
};
