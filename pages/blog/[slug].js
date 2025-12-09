import Link from 'next/link';
import Image from "next/legacy/image";
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
// import useSWR from 'swr';

import Heading from '@/components/heading';
import PostSeo from '@/components/post-seo';
import PublishedDate from '@/components/published-date';
// import ViewsCounter from '@/components/views-counter';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getAllPostSlugs, getContent } from '@/lib/content';
// import fetcher from '@/lib/fetcher';
import { getComponents, getLocalizedPath } from '@/lib/util';

const Post = ({ mdxSource, frontMatter, hydrationComponentsList }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const components = getComponents(hydrationComponentsList);
  const { image: imagePath } = frontMatter;
  const localizedPath = getLocalizedPath(router);
  // const { data } = useSWR(
  //   `/api/page-views?slug=${encodeURIComponent(localizedPath)}`,
  //   fetcher,
  //   { revalidateOnFocus: false }
  // );
  // const views = data?.pageViews || 0;

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
          {/* <ViewsCounter loading={!data} views={views} /> */}
        </div>
        {imagePath ? (
          <picture className='block mx-auto my-3 max-w-media'>
            <Image
              alt={frontMatter.title}
              className='rounded-md'
              height={1080}
              layout='responsive'
              priority
              src={imagePath}
              width={1920}
            />
          </picture>
        ) : null}
        <div>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  return await getContent({
    slug: params.slug,
    locale,
    type: 'posts',
  });
};

export default Post;
