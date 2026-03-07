import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Heading from '@/components/heading';
import PublishedDate from '@/components/published-date';
import ReadMore from '@/components/read-more';
import type { PostData } from '../types';

interface BlogPostProps {
  index: number;
  post: PostData;
}

const BlogPost = ({ index, post }: BlogPostProps) => {
  const router = useRouter();
  const { locale } = router;
  const blogPostPath = `/blog/${post.slug}`;

  return (
    <article className='mb-4 border-b last:border-b-0'>
      <Heading linkTo={blogPostPath}>{post.frontMatter?.title}</Heading>
      <div className='flex justify-between my-2 text-sm text-gray-600'>
        <PublishedDate date={post.frontMatter?.date} locale={locale} />
      </div>
      {post?.frontMatter?.image ? (
        <Link href={blogPostPath} className='block mx-auto my-3 max-w-media'>

          <Image
            alt={post.frontMatter.title}
            className='rounded-md'
            height={1080}
            priority={index < 2}
            quality={75}
            style={{ width: '100%', height: 'auto' }}
            src={post.frontMatter.image}
            width={1920}
          />

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
