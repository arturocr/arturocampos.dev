import * as prodLytics from './prod';
import * as devLytics from './dev';

const isLocal = () => location?.hostname === 'localhost';

const isDev = process.env.NODE_ENV !== 'production';

const analytics = isDev || isLocal ? devLytics : prodLytics;

const { GA_TRACKING_ID, pageview, event } = analytics;

export { GA_TRACKING_ID, pageview, event };
