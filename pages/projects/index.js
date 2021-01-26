import Link from 'next/link';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';

const Calculator = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t('projects')}</Heading>
      <ul className='my-4 list-disc list-inside'>
        <li>
          <Link href='/projects/tax-calculator-crc'>{t('calculator')}</Link>
        </li>
      </ul>
    </>
  );
};

export default Calculator;
