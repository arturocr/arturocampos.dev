import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Heading from '@/components/heading';
import MDXComponents from '@/components/mdx-components';
import PublishedDate from '@/components/published-date';
import ReadMore from '@/components/read-more';
import Vimeo from '@/components/vimeo';
import YouTube from '@/components/youtube';
import { getTranslation } from '@/i18n/getTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getContent, getSortedPostsData } from '@/lib/content';
import { mdxOptions } from '@/lib/mdx';
import { getLocalizedPath } from '@/lib/util';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { frontMatter } = getContent({
    slug: 'index',
    locale,
    type: 'content',
  });
  const path = getLocalizedPath(locale, '/');
  const url = `${siteBaseUrl}${path}`;
  return {
    description: frontMatter.description,
    alternates: { canonical: url },
    openGraph: {
      description: frontMatter.description,
      locale,
      url,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { content, frontMatter } = getContent({
    slug: 'index',
    locale,
    type: 'content',
  });
  const { t } = getTranslation(locale);
  const latestPosts = getSortedPostsData({ locale }).slice(0, 3);

  return (
    <>
      <Heading className='md:text-center!'>{frontMatter.title}</Heading>
      <MDXRemote
        source={content}
        components={{
          ...MDXComponents,
          Image: Image as any,
          Vimeo: Vimeo as any,
          YouTube: YouTube as any,
        }}
        options={{ mdxOptions }}
      />
      {latestPosts.length > 0 && (
        <section className='mt-4'>
          <h2 className='mb-6 text-2xl font-bold tracking-tight'>
            <span className='gradient-text'>{t('latest-posts')}</span>
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {latestPosts.map(post => {
              const postPath = getLocalizedPath(locale, `/blog/${post.slug}`);
              return (
                <article
                  key={post.slug}
                  className='flex flex-col gap-2 rounded-lg border border-gray-200 overflow-hidden'
                >
                  {post.frontMatter.image && (
                    <Link href={postPath} className='block'>
                      <Image
                        alt={post.frontMatter.title}
                        className='w-full object-cover'
                        height={630}
                        priority
                        quality={75}
                        src={post.frontMatter.image}
                        width={1200}
                      />
                    </Link>
                  )}
                  <div className='flex flex-col gap-2 p-5 pt-3'>
                    <h3 className='text-lg font-semibold leading-snug'>
                      <Link href={postPath} className='gradient-text'>
                        {post.frontMatter.title}
                      </Link>
                    </h3>
                    <p className='text-sm text-gray-500'>
                      <PublishedDate
                        date={post.frontMatter.date}
                        locale={locale}
                      />
                    </p>
                    {post.frontMatter.description && (
                      <p className='flex-1 text-sm text-gray-600'>
                        {post.frontMatter.description}
                      </p>
                    )}
                    <p className='mt-1 text-sm'>
                      <ReadMore
                        locale={locale}
                        title={post.frontMatter.title}
                        url={postPath}
                      />
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
