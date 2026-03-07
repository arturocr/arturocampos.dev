'use client';

import clsx from 'clsx';
import useTranslation from '@/i18n/useTranslation';

interface ViewsCounterProps {
  loading?: boolean;
  views: number;
}

const ViewsCounter = ({ loading = false, views }: ViewsCounterProps) => {
  const { locale, t } = useTranslation();

  return (
    <span className={clsx('transition-opacity', loading && 'opacity-0')}>
      {views.toLocaleString(locale)} {views !== 1 ? t('views') : t('view')}
    </span>
  );
};

export default ViewsCounter;
