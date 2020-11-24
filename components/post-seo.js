import { NextSeo, ArticleJsonLd } from 'next-seo';
import { siteBaseUrl } from '@/lib/constants';

const PostSeo = ({
  author,
  date,
  description,
  image,
  locale = 'en',
  title,
  url,
}) => {
  const publishedAt = new Date(date).toISOString();
  const featuredImage = {
    url: image ? `${siteBaseUrl}${image}` : `${siteBaseUrl}/image/og.png`,
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
        authorName={author}
        dateModified={publishedAt}
        datePublished={publishedAt}
        description={description}
        images={[featuredImage]}
        publisherLogo='/android-chrome-192x192.png'
        publisherName={author}
        title={title}
        url={url}
      />
    </>
  );
};

export default PostSeo;
