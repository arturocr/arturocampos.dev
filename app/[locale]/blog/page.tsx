import type { Metadata } from 'next';

import BlogPost from '@/components/blog-post';
import Heading from '@/components/heading';
import Pagination from '@/components/pagination';
import { getTranslation } from '@/i18n/getTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getSortedPostsData } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';

const postsPerPage = 10;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { t } = getTranslation(locale);
  const pageTitle = `${t('blog')} - Arturo Campos`;
  const description = t('blog-description');
  const path = getLocalizedPath(locale, '/blog');
  const url = `${siteBaseUrl}${path}`;
  return {
    title: t('blog'),
    description,
    alternates: { canonical: url },
    openGraph: { title: pageTitle, description, url, locale },
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale } = await params;
  const { page } = await searchParams;
  const { t } = getTranslation(locale);
  const allPostsData = getSortedPostsData({ locale });
  const currentPage = parseInt(page || '1', 10);
  const numPages = Math.ceil(allPostsData.length / postsPerPage);
  const pagedPosts = allPostsData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      {pagedPosts.length ? (
        pagedPosts.map((post, index) => (
          <BlogPost key={post.slug} index={index} post={post} locale={locale} />
        ))
      ) : (
        <>
          <Heading>{t('blog')}</Heading>
          <p className='my-6'>{t('no-blog-posts')}</p>
          <p className='text-center text-7xl'>
            <span aria-label={t('sorry')} role='img'>
              😬
            </span>
          </p>
        </>
      )}
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}
