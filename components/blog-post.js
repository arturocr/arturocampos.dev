import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Heading from '@/components/heading';
import PublishedDate from '@/components/published-date';
import ReadMore from '@/components/read-more';
import ViewsCounter from '@/components/views-counter';
import fetcher from '@/lib/fetcher';
import { getLocalizedPath } from '@/lib/util';

const BlogPost = ({ post }) => {
  const router = useRouter();
  const { defaultLocale, locale } = router;
  const blogPostPath = `/blog/${post.slug}`;
  const localizedPath = getLocalizedPath({
    defaultLocale,
    locale,
    asPath: blogPostPath,
  });
  const { data } = useSWR(
    `/api/visitors?slug=${encodeURIComponent(localizedPath)}&justRead=true`,
    fetcher
  );
  const views = data?.visitors || 0;

  return (
    <article className='mb-4 border-b last:border-b-0'>
      <Heading linkTo={blogPostPath}>{post.frontMatter?.title}</Heading>
      <div className='flex justify-between my-2 text-sm text-gray-600'>
        <PublishedDate date={post.frontMatter?.date} locale={locale} />
        <ViewsCounter loading={!data} views={views} />
      </div>
      {post?.frontMatter?.image ? (
        <Link href={blogPostPath}>
          <a className='block mx-auto my-3 transition-all transform hover:-translate-y-1 hover:shadow-lg max-w-media'>
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
        {post.frontMatter.description && <p>{post.frontMatter.description}</p>}
        <p className='mt-2'>
          <ReadMore title={post.frontMatter.title} url={blogPostPath} />
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
