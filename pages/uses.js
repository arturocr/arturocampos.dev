import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import useSWR from 'swr';

import Heading from '@/components/heading';
import ViewsCounter from '@/components/views-counter';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
import fetcher from '@/lib/fetcher';
import { getLocalizedPath } from '@/lib/util';

const Uses = ({ mdxSource, frontMatter }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const localizedPath = getLocalizedPath(router);
  const title = `${t('uses')} - Arturo Campos`;
  const { description } = frontMatter;
  const { data } = useSWR(
    `/api/page-views?slug=${encodeURIComponent(localizedPath)}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  const views = data?.pageViews || 0;

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
        }}
      />
      <Heading>{frontMatter.title}</Heading>
      <div className='flex justify-end my-2 text-sm text-gray-600'>
        <ViewsCounter loading={!data} views={views} />
      </div>
      <div>
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return await getContent({
    slug: 'uses',
    locale,
    type: 'content',
  });
};

export default Uses;
