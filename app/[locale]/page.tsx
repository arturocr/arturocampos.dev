import Image from 'next/image';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Heading from '@/components/heading';
import MDXComponents from '@/components/mdx-components';
import Vimeo from '@/components/vimeo';
import YouTube from '@/components/youtube';
import { siteBaseUrl } from '@/lib/constants';
import { getContent } from '@/lib/content';
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
    </>
  );
}
