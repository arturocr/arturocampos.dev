import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import PostSeo from '@/components/post-seo';
import PublishedDate from '@/components/published-date';
import ViewsCounter from '@/components/views-counter';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getAllPostSlugs, getContent } from '@/lib/content';
import { getPathViews } from '@/lib/goat-counter';
import { getComponents, getLocalizedPath } from '@/lib/util';

const Post = ({ mdxSource, frontMatter, hydrationComponentsList }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const [views, setViews] = useState(0);
  const content = hydrate(mdxSource, {
    components: getComponents(hydrationComponentsList),
  });
  const localizedPath = getLocalizedPath(router);
  const { image: imagePath } = frontMatter;

  useEffect(async () => {
    const viewsCount = await getPathViews(localizedPath);
    setViews(viewsCount);
  }, [localizedPath]);

  return (
    <>
      <PostSeo
        locale={locale}
        url={`${siteBaseUrl}${localizedPath}`}
        {...frontMatter}
      />
      <div className='flex items-center px-2 py-1 mb-4 space-x-1 overflow-hidden text-xs font-medium text-gray-600 uppercase bg-gray-100 border border-gray-300 rounded-md'>
        <Link href='/'>
          <a className='inline-flex items-center'>{t('home')}</a>
        </Link>
        <span>/</span>
        <Link href='/blog'>
          <a className='inline-flex items-center'>{t('blog')}</a>
        </Link>
        <span>/</span>
        <span className='truncate'>{frontMatter.title}</span>
      </div>
      <article>
        <Heading>{frontMatter.title}</Heading>
        <div className='flex justify-between my-2 text-sm text-gray-600'>
          <PublishedDate date={frontMatter.date} locale={locale} />
          <ViewsCounter views={views} />
        </div>
        {imagePath ? (
          <picture className='block mx-auto my-3 max-w-media'>
            <Image
              className='rounded-md'
              src={imagePath}
              alt={frontMatter.title}
              layout='responsive'
              height={1080}
              width={1920}
            />
          </picture>
        ) : null}
        <div>{content}</div>
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
