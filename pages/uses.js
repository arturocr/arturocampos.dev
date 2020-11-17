import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';
import { getContent } from '@/lib/content';
import { getLocalizedUrl } from '@/lib/util';

const Uses = ({ mdxSource, frontMatter }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource);
  const localizedUrl = getLocalizedUrl(router);
  const title = `${t('uses')} - Arturo Campos`;
  const { description } = frontMatter;

  return (
    <>
      <NextSeo
        title={title}
        canonical={localizedUrl}
        description={description}
        openGraph={{
          url: localizedUrl,
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
