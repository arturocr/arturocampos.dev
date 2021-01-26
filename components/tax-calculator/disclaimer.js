import useTranslation from '@/i18n/useTranslation';
import { shortDateOptions } from '@/lib/constants';

const Disclaimer = ({ config, locale }) => {
  const { t } = useTranslation();
  const { periodBegins, periodEnds, sourceLink } = config;

  return (
    <>
      <p className='text-sm leading-relaxed'>
        <strong className='tracking-tight uppercase'>{t('important')}:</strong>{' '}
        {t('calculator-disclaimer')}.
      </p>
      <p className='mt-4 text-sm italic'>
        *{t('calculator-amounts-info')}{' '}
        {new Date(periodBegins).toLocaleDateString(locale, shortDateOptions)}{' '}
        {t('until')}{' '}
        {new Date(periodEnds).toLocaleDateString(locale, shortDateOptions)}.{' '}
        <a href={sourceLink} rel='noopener noreferrer' target='_blank'>
          {t('source')}
        </a>
        .
      </p>
    </>
  );
};

export default Disclaimer;
