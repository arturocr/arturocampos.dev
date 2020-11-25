import useTranslation from '@/i18n/useTranslation';

const ViewsCounter = ({ views }) => {
  const { t } = useTranslation();

  return (
    <span>
      {views} {views !== 1 ? t('views') : t('view')}
    </span>
  );
};

export default ViewsCounter;
