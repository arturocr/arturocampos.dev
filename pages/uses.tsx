import { useRouter } from 'next/router';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { MDXRemote } from 'next-mdx-remote';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';

const Uses = ({ mdxSource, frontMatter }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const localizedPath = getLocalizedPath(router);
  const title = `${t('uses')} - Arturo Campos`;
  const { description } = frontMatter;

  return (
    <>
      <Head>
        {generateNextSeo({
          title,
          canonical: `${siteBaseUrl}${localizedPath}`,
          description,
          openGraph: {
            url: `${siteBaseUrl}${localizedPath}`,
            locale,
            title,
            description,
          },
        })}
      </Head>
      <Heading>{frontMatter.title}</Heading>
      <div className='flex justify-end my-2 text-sm text-gray-600'>
      </div>
      <div>
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return await getContent({
    slug: 'uses',
    locale: locale || 'en',
    type: 'content',
  });
};

export default Uses;
