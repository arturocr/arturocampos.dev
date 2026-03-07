import { getTranslation } from '@/i18n/getTranslation';
import { shortDateOptions } from '@/lib/constants';
import type { CalculatorConfig } from '../../types';

interface DisclaimerProps {
  config: CalculatorConfig;
  locale: string;
}

const Disclaimer = ({ config, locale }: DisclaimerProps) => {
  const { t } = getTranslation(locale);
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
        {t('to')}{' '}
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
