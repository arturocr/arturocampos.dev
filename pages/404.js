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
      <Heading className='md:text-center'>{t('error-heading')}</Heading>
      <p>{t('error-content')}.</p>
    </>
  );
};

export default Error;
