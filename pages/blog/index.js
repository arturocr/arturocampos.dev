import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Heading from '@/components/heading';
import ReadMore from '@/components/read-more';
import useTranslation from '@/i18n/useTranslation';
import { dateOptions, siteBaseUrl } from '@/lib/constants';
import { getSortedPostsData } from '@/lib/content';
import { getLocalizedPath } from '@/lib/util';

const Blog = ({ allPostsData = [] }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const localizedPath = getLocalizedPath(router);
  const title = `${t('blog')} - Arturo Campos`;
  const description = t('blog-description');

  // Pagination
  const postsPerPage = 10;
  const numPages = Math.ceil(allPostsData.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pagedPosts = allPostsData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
      {pagedPosts.length ? (
        pagedPosts.map(post => (
          <article key={post.slug} className='mb-4 border-b last:border-b-0'>
            <Heading linkTo={`/blog/${post.slug}`}>
              {post.frontMatter?.title}
            </Heading>
            <time className='block my-2 text-sm text-center text-gray-600 md:text-left'>
              {new Date(post.frontMatter?.date).toLocaleDateString(
                locale,
                dateOptions
              )}
            </time>
            {post?.frontMatter?.image ? (
              <Link href={`/blog/${post.slug}`}>
                <a className='block mx-auto my-3 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg max-w-media'>
                  <Image
                    className='rounded-md'
                    src={post.frontMatter.image}
                    alt={post.frontMatter.title}
                    layout='responsive'
                    height={1080}
                    width={1920}
                  />
                </a>
              </Link>
            ) : null}
            <div className='mt-2 mb-4'>
              {post.frontMatter.description && (
                <p>{post.frontMatter.description}</p>
              )}
              <p className='mt-2'>
                <ReadMore
                  title={post.frontMatter.title}
                  url={`/blog/${post.slug}`}
                />
              </p>
            </div>
          </article>
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
      {/* Paging */}
      {numPages > 1 && (
        <div className='pagination'>
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={`pagination-number${i + 1}`}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export const getStaticProps = ({ locale }) => {
  const allPostsData = getSortedPostsData({ locale });
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
