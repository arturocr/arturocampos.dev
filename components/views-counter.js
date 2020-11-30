import clsx from 'clsx';
import useTranslation from '@/i18n/useTranslation';

const ViewsCounter = ({ loading = false, views }) => {
  const { t } = useTranslation();

  return (
    <span className={clsx('transition-opacity', loading && 'opacity-0')}>
      {views} {views !== 1 ? t('views') : t('view')}
    </span>
  );
};

export default ViewsCounter;
