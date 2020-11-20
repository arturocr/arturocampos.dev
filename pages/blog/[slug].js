import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import PostSeo from '@/components/post-seo';
import useTranslation from '@/i18n/useTranslation';
import { getAllPostSlugs, getContent } from '@/lib/content';
import { dateOptions } from '@/lib/constants';
import { getComponents, getLocalizedUrl } from '@/lib/util';

const Post = ({ mdxSource, frontMatter, hydrationComponentsList }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource, {
    components: getComponents(hydrationComponentsList),
  });
  const localizedUrl = getLocalizedUrl(router);
  const { image: imagePath } = frontMatter;

  return (
    <>
      <PostSeo locale={locale} url={localizedUrl} {...frontMatter} />
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
        <time className='block my-2 text-sm text-center text-gray-600 md:text-left'>
          {new Date(frontMatter.date).toLocaleDateString(locale, dateOptions)}
        </time>
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
