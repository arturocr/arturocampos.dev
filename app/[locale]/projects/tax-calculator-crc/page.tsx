import Link from 'next/link';
import type { Metadata } from 'next';

import DonateButton from '@/components/donate-button';
import Heading from '@/components/heading';
import Calculator from '@/components/tax-calculator';
import Disclaimer from '@/components/tax-calculator/disclaimer';
import { getTranslation } from '@/i18n/getTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getData } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';
import type { CalculatorData } from '../../../../types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getTranslation(locale);
  const pageTitle = `${t('calculator')} - Arturo Campos`;
  const description = t('calculator-description');
  const path = getLocalizedPath(locale, '/projects/tax-calculator-crc');
  const url = `${siteBaseUrl}${path}`;
  return {
    title: t('calculator'),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      locale,
      images: [{ url: `${siteBaseUrl}/images/calculator-og.png`, alt: pageTitle }],
    },
  };
}

export default async function TaxCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = getTranslation(locale);
  const calculatorConfig: CalculatorData = JSON.parse(getData('calculator-config.json'));
  const { config, salaryCurrencies, tracts } = calculatorConfig;

  const homePath = getLocalizedPath(locale, '/');
  const projectsPath = getLocalizedPath(locale, '/projects');

  return (
    <>
      <div className='flex items-center px-2 py-1 mb-4 space-x-1 overflow-hidden text-xs font-medium text-gray-600 uppercase bg-gray-100 border border-gray-300 rounded-md'>
        <Link href={homePath} className='inline-flex items-center'>
          {t('home')}
        </Link>
        <span>/</span>
        <Link href={projectsPath} className='inline-flex items-center'>
          {t('projects')}
        </Link>
        <span>/</span>
        <span className='truncate'>{t('calculator')}</span>
      </div>
      <section>
        <Heading>{t('calculator')}</Heading>
        <div className='flex justify-end my-2 text-sm text-gray-600'></div>
        <p className='my-3'>{t('calculator-description')}.</p>
        <Calculator
          salaryCurrencies={salaryCurrencies}
          socialSecurityTax={config.socialSecurityTax}
          tracts={tracts}
        />
        <Disclaimer config={config} locale={locale} />
        <DonateButton locale={locale} />
      </section>
    </>
  );
}
