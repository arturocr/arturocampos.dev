import { useRouter } from 'next/router';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
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
      <Head>
        {generateNextSeo({
          canonical: `${siteBaseUrl}${localizedPath}`,
          description,
          openGraph: {
            description,
            locale,
            url: `${siteBaseUrl}${localizedPath}`,
          },
        })}
      </Head>
      <Heading className='md:text-center!'>{frontMatter.title}</Heading>
      <MDXRemote {...mdxSource} components={components} />
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
