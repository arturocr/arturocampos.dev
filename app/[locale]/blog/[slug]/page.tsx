import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Heading from '@/components/heading';
import MDXComponents from '@/components/mdx-components';
import PublishedDate from '@/components/published-date';
import Vimeo from '@/components/vimeo';
import YouTube from '@/components/youtube';
import { getTranslation } from '@/i18n/getTranslation';
import { siteBaseUrl } from '@/lib/constants';
import { getAllPostSlugs, getContent } from '@/lib/content';
import { mdxOptions } from '@/lib/mdx';
import { getLocalizedPath } from '@/lib/util';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const { frontMatter } = getContent({ slug, locale, type: 'posts' });
  const path = getLocalizedPath(locale, `/blog/${slug}`);
  const url = `${siteBaseUrl}${path}`;
  const featuredImage = frontMatter.image
    ? `${siteBaseUrl}${frontMatter.image}`
    : `${siteBaseUrl}/images/og.png`;

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: frontMatter.title,
      description: frontMatter.description,
      locale,
      images: [{ url: featuredImage, alt: frontMatter.title }],
      publishedTime: new Date(frontMatter.date).toISOString(),
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { t } = getTranslation(locale);

  let content: string;
  let frontMatter: ReturnType<typeof getContent>['frontMatter'];
  try {
    ({ content, frontMatter } = getContent({ slug, locale, type: 'posts' }));
  } catch {
    notFound();
  }

  const homePath = getLocalizedPath(locale, '/');
  const blogPath = getLocalizedPath(locale, '/blog');
  const { image: imagePath } = frontMatter!;

  return (
    <>
      <div className='flex items-center px-2 py-1 mb-4 space-x-1 overflow-hidden text-xs font-medium text-gray-600 uppercase bg-gray-100 border border-gray-300 rounded-md'>
        <Link href={homePath} className='inline-flex items-center'>
          {t('home')}
        </Link>
        <span>/</span>
        <Link href={blogPath} className='inline-flex items-center'>
          {t('blog')}
        </Link>
        <span>/</span>
        <span className='truncate'>{frontMatter!.title}</span>
      </div>
      <article>
        <Heading>{frontMatter!.title}</Heading>
        <div className='flex justify-between my-2 text-sm text-gray-600'>
          <PublishedDate date={frontMatter!.date} locale={locale} />
        </div>
        {imagePath ? (
          <div className='block mx-auto my-3 max-w-media'>
            <Image
              alt={frontMatter!.title}
              className='rounded-md'
              height={1080}
              priority
              src={imagePath as string}
              style={{ width: '100%', height: 'auto' }}
              width={1920}
            />
          </div>
        ) : null}
        <div>
          <MDXRemote
            source={content!}
            components={{
              ...MDXComponents,
              Image: Image as any,
              Vimeo: Vimeo as any,
              YouTube: YouTube as any,
            }}
            options={{ mdxOptions }}
          />
        </div>
      </article>
    </>
  );
}
