import Head from 'next/head';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';

const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('error-heading')} - Arturo Campos</title>
      </Head>
      <Heading>{t('error-heading')}</Heading>
      <p className='my-6'>{t('error-content')}.</p>
      <p className='text-center text-7xl'>
        <span aria-label={t('sorry')} role='img'>
          😵
        </span>
      </p>
    </>
  );
};

export default Error;
