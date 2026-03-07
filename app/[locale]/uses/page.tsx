import Image from 'next/image';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Heading from '@/components/heading';
import MDXComponents from '@/components/mdx-components';
import Vimeo from '@/components/vimeo';
import YouTube from '@/components/youtube';
import { getTranslation } from '@/i18n/getTranslation';
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
  const { t } = getTranslation(locale);
  const { frontMatter } = getContent({ slug: 'uses', locale, type: 'content' });
  const path = getLocalizedPath(locale, '/uses');
  const url = `${siteBaseUrl}${path}`;
  return {
    title: t('uses'),
    description: frontMatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${t('uses')} - Arturo Campos`,
      description: frontMatter.description,
      url,
      locale,
    },
  };
}

export default async function UsesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { content, frontMatter } = getContent({
    slug: 'uses',
    locale,
    type: 'content',
  });

  return (
    <>
      <Heading>{frontMatter.title}</Heading>
      <div className='flex justify-end my-2 text-sm text-gray-600'></div>
      <div>
        <MDXRemote
          source={content}
          components={{ ...MDXComponents, Image: Image as any, Vimeo: Vimeo as any, YouTube: YouTube as any }}
          options={{ mdxOptions }}
        />
      </div>
    </>
  );
}
