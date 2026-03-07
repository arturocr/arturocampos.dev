import { NextSeo, ArticleJsonLd } from 'next-seo';
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
      <NextSeo
        title={`${title} – Arturo Campos`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
          },
          locale,
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={author || ''}
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={description || ''}
        images={[featuredImage.url]}
        publisherLogo='/android-chrome-192x192.png'
        publisherName={author || ''}
        title={title}
        url={url}
      />
    </>
  );
};

export default PostSeo;
