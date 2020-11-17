import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';

import Heading from '@/components/heading';
import PostSeo from '@/components/post-seo';
import { getAllPostSlugs, getContent } from '@/lib/content';
import { dateOptions } from '@/lib/constants';
import { getLocalizedUrl } from '@/lib/util';

const components = {
  Image,
  Vimeo: dynamic(() => import('@/components/vimeo')),
  YouTube: dynamic(() => import('@/components/youtube')),
};

const Post = ({ mdxSource, frontMatter }) => {
  const router = useRouter();
  const { locale } = router;
  const content = hydrate(mdxSource, { components });
  const localizedUrl = getLocalizedUrl(router);
  const { image: imagePath } = frontMatter;

  return (
    <>
      <PostSeo locale={locale} url={localizedUrl} {...frontMatter} />
      <article>
        <Heading>{frontMatter.title}</Heading>
        <time className='block my-2 text-sm text-center text-gray-600 md:text-left'>
          {new Date(frontMatter.date).toLocaleDateString(locale, dateOptions)}
        </time>
        {imagePath ? (
          <picture className='block mx-auto my-3 max-w-video'>
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
    components,
  });
};

export default Post;
