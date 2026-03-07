import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Heading from '@/components/heading';
import { getTranslation } from '@/i18n/getTranslation';
import { getLocalizedPath } from '@/lib/util';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getTranslation(locale);
  return { title: t('projects') };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = getTranslation(locale);
  const calcPath = getLocalizedPath(locale, '/projects/tax-calculator-crc');

  return (
    <>
      <Heading>{t('projects')}</Heading>
      <section className='flex flex-wrap my-4'>
        <article className='w-1/2 md:w-1/3'>
          <Link
            href={calcPath}
            className='block p-4 m-1 font-bold leading-tight text-center transition-all border border-gray-200 rounded-md shadow-lg hover:shadow-xl'
          >
            <Image
              alt={t('calculator')}
              className='rounded-md'
              height={1134}
              priority
              style={{ width: '100%', height: 'auto' }}
              src='/images/calculator-logo.png'
              width={1134}
            />
            {t('calculator')}
          </Link>
        </article>
      </section>
    </>
  );
}
