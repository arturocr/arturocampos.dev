import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import { getContent } from '@/lib/content';
import { getLocalizedUrl } from '@/lib/util';

const components = {
  Image,
};

const Home = ({ mdxSource, frontMatter }) => {
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource, { components });
  const localizedUrl = getLocalizedUrl(router);
  const { description } = frontMatter;

  return (
    <>
      <NextSeo
        canonical={localizedUrl}
        description={description}
        openGraph={{
          description,
          locale,
          url: localizedUrl,
        }}
      />
      <Heading className='md:text-center'>{frontMatter.title}</Heading>
      <div>{content}</div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  return await getContent({
    slug: 'index',
    locale,
    type: 'content',
    components,
  });
};

export default Home;
