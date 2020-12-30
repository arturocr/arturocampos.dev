import * as prodLytics from './prod';
import * as devLytics from './dev';

const isDev = process.env.NODE_ENV !== 'production';

const analytics = isDev ? devLytics : prodLytics;

const { GA_TRACKING_ID, pageview, event } = analytics;

export { GA_TRACKING_ID, pageview, event };
