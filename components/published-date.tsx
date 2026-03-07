import { dateOptions } from '@/lib/constants';

interface PublishedDateProps {
  date: string;
  locale?: string;
}

const PublishedDate = ({ date, locale }: PublishedDateProps) => (
  <time>{new Date(date).toLocaleDateString(locale, dateOptions)}</time>
);

export default PublishedDate;
