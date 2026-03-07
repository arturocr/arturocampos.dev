import Head from 'next/head';
import { ArticleJsonLd } from 'next-seo';
import { generateNextSeo } from 'next-seo/pages';
import { siteBaseUrl } from '@/lib/constants';

interface PostSeoProps {
  author?: string;
  date: string;
  description?: string;
  image?: string;
  locale?: string;
  title: string;
  url: string;
}

const PostSeo = ({
  author,
  date,
  description,
  image,
  locale = 'en',
  title,
  url,
}: PostSeoProps) => {
  const publishedAt = new Date(date).toISOString();
  const featuredImage = {
    url: image ? `${siteBaseUrl}${image}` : `${siteBaseUrl}/images/og.png`,
    alt: title,
  };

  return (
    <>
      <Head>
        {generateNextSeo({
          title: `${title} – Arturo Campos`,
          description,
          canonical: url,
          openGraph: {
            type: 'article',
            article: {
              publishedTime: publishedAt,
            },
            locale,
            url,
            title,
            description,
            images: [featuredImage],
          },
        })}
      </Head>
      <ArticleJsonLd
        headline={title}
        author={author || ''}
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={description || ''}
        image={featuredImage.url}
        publisher={author || ''}
        url={url}
      />
    </>
  );
};

export default PostSeo;
