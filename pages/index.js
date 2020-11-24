import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
import { getComponents, getLocalizedPath } from '@/lib/util';

const Home = ({ mdxSource, frontMatter, hydrationComponentsList }) => {
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource, {
    components: getComponents(hydrationComponentsList),
  });
  const localizedPath = getLocalizedPath(router);
  const { description } = frontMatter;

  return (
    <>
      <NextSeo
        canonical={`${siteBaseUrl}${localizedPath}`}
        description={description}
        openGraph={{
          description,
          locale,
          url: `${siteBaseUrl}${localizedPath}`,
        }}
      />
      <Heading className='md:text-center'>{frontMatter.title}</Heading>
      {content}
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return await getContent({
    slug: 'index',
    locale,
    type: 'content',
  });
};

export default Home;
