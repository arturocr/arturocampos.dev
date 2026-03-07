import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import type { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import Heading from '@/components/heading';
import PostSeo from '@/components/post-seo';
import PublishedDate from '@/components/published-date';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getAllPostSlugs, getContent } from '@/lib/content';
import { getComponents, getLocalizedPath } from '@/lib/util';

const Post = ({ mdxSource, frontMatter, hydrationComponentsList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const components = getComponents(hydrationComponentsList);
  const { image: imagePath } = frontMatter;
  const localizedPath = getLocalizedPath(router);

  return (
    <>
      <PostSeo
        locale={locale}
        url={`${siteBaseUrl}${localizedPath}`}
        {...frontMatter}
      />
      <div className='flex items-center px-2 py-1 mb-4 space-x-1 overflow-hidden text-xs font-medium text-gray-600 uppercase bg-gray-100 border border-gray-300 rounded-md'>
        <Link href='/' className='inline-flex items-center'>
          {t('home')}
        </Link>
        <span>/</span>
        <Link href='/blog' className='inline-flex items-center'>
          {t('blog')}
        </Link>
        <span>/</span>
        <span className='truncate'>{frontMatter.title}</span>
      </div>
      <article>
        <Heading>{frontMatter.title}</Heading>
        <div className='flex justify-between my-2 text-sm text-gray-600'>
          <PublishedDate date={frontMatter.date} locale={locale} />
        </div>
        {imagePath ? (
          <div className='block mx-auto my-3 max-w-media'>
            <Image
              alt={frontMatter.title}
              className='rounded-md'
              height={1080}
              priority
              src={imagePath}
              style={{ width: '100%', height: 'auto' }}
              width={1920}
            />
          </div>
        ) : null}
        <div>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const paths = getAllPostSlugs();
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ locale, params }: GetStaticPropsContext) => {
  return await getContent({
    slug: (params?.slug as string) || '',
    locale: locale || 'en',
    type: 'posts',
  });
};

export default Post;
