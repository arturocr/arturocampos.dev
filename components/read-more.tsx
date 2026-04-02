import Link from 'next/link';

import { getTranslation } from '@/i18n/getTranslation';

interface ReadMoreProps {
  locale: string;
  title: string;
  url: string;
}

const ReadMore = ({ locale, title, url }: ReadMoreProps) => {
  const { t } = getTranslation(locale);
  return (
    <Link
      href={url}
      className='group inline-flex items-center gap-1 font-medium text-middle hover:text-secondary'
    >
      <span className='sr-only'>{title}</span>
      <span className='not-sr-only'>{t('read-more')}</span>
      <svg
        className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </Link>
  );
};

export default ReadMore;
