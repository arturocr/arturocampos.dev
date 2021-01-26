import Image from 'next/image';
import Link from 'next/link';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';

const Calculator = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t('projects')}</Heading>
      <section className='flex flex-wrap my-4'>
        <article className='w-1/2 md:w-1/3'>
          <Link href='/projects/tax-calculator-crc'>
            <a className='block p-4 m-1 font-bold text-center transition-all border border-gray-200 rounded-md shadow-lg hover:shadow-xl'>
              <Image
                alt={t('calculator')}
                className='rounded-md'
                height={1134}
                layout='responsive'
                priority
                src='/images/calculator-logo.png'
                width={1134}
              />
              {t('calculator')}
            </a>
          </Link>
        </article>
      </section>
    </>
  );
};

export default Calculator;
