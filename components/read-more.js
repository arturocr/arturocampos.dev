import Link from 'next/link';

import useTranslation from '@/i18n/useTranslation';

const ReadMore = ({ title, url }) => {
  const { t } = useTranslation();
  return (
    <Link href={url}>
      <a className='transition-colors duration-200 text-middle hover:text-secondary'>
        <span className='sr-only'>{title}</span>
        <span className='not-sr-only'>{t('read-more')} </span>
        <svg
          className='inline-block w-4 align-middle'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 8l4 4m0 0l-4 4m4-4H3'
          />
        </svg>
      </a>
    </Link>
  );
};

export default ReadMore;
