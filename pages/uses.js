import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';

const Uses = ({ mdxSource, frontMatter }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource);
  const localizedPath = getLocalizedPath(router);
  const title = `${t('uses')} - Arturo Campos`;
  const { description } = frontMatter;

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
      <div>{content}</div>
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
