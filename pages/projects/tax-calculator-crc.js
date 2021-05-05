import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import DonateButton from '@/components/donate-button';
import Heading from '@/components/heading';
import Calculator from '@/components/tax-calculator';
import Disclaimer from '@/components/tax-calculator/disclaimer';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getData } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';

const TaxCalculator = ({ config, salaryCurrencies, tracts }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const localizedPath = getLocalizedPath(router);
  const title = `${t('calculator')} - Arturo Campos`;
  const description = t('calculator-description');
  const featuredImage = {
    url: `${siteBaseUrl}/images/calculator-og.png`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={`${siteBaseUrl}${localizedPath}`}
        description={description}
        openGraph={{
          url: `${siteBaseUrl}${localizedPath}`,
          locale,
          title,
          description,
          images: [featuredImage],
        }}
      />
      <div className='flex items-center px-2 py-1 mb-4 space-x-1 overflow-hidden text-xs font-medium text-gray-600 uppercase bg-gray-100 border border-gray-300 rounded-md'>
        <Link href='/'>
          <a className='inline-flex items-center'>{t('home')}</a>
        </Link>
        <span>/</span>
        <Link href='/projects'>
          <a className='inline-flex items-center'>{t('projects')}</a>
        </Link>
        <span>/</span>
        <span className='truncate'>{t('calculator')}</span>
      </div>
      <section>
        <Heading>{t('calculator')}</Heading>
        <p className='my-3'>{t('calculator-description')}.</p>
        <Calculator
          salaryCurrencies={salaryCurrencies}
          socialSecurityTax={config.socialSecurityTax}
          tracts={tracts}
        />
        <Disclaimer config={config} locale={locale} />
        <DonateButton />
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const calculatorConfig = JSON.parse(getData('calculator-config.json'));
  return {
    props: { ...calculatorConfig },
  };
};

export default TaxCalculator;
