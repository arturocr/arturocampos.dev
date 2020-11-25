import { dateOptions } from '@/lib/constants';

const PublishedDate = ({ date, locale }) => (
  <time>{new Date(date).toLocaleDateString(locale, dateOptions)}</time>
);

export default PublishedDate;
