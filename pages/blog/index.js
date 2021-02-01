import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import BlogPost from '@/components/blog-post';
import Heading from '@/components/heading';
import useTranslation from '@/i18n/useTranslation';
import { siteBaseUrl } from '@/lib/constants';
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
        pagedPosts.map((post, index) => (
          <BlogPost
            index={index}
            key={post.slug}
            post={post}
          />
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
