import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import Heading from '@/components/heading';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
import { getComponents, getLocalizedPath } from '@/lib/util';

const Home = ({ mdxSource, frontMatter, hydrationComponentsList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { locale } = router;
  const components = getComponents(hydrationComponentsList);
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
      <MDXRemote {...mdxSource} components={components as unknown as Record<string, React.ReactNode>} />
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return await getContent({
    slug: 'index',
    locale: locale || 'en',
    type: 'content',
  });
};

export default Home;
