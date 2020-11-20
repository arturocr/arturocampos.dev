import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@happykit/analytics';

import Footer from '@/components/footer';
import Header from '@/components/header';
import MDXComponents from '@/components/mdx-components';
import SEO from '../next-seo.config';
import theme from '@/lib/theme';

import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/prism.css';

const MyApp = ({ Component, pageProps, router }) => {
  useAnalytics({ publicKey: 'analytics_pub_bba22bdbcd' });
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta content={theme.colors.white} name='theme-color' />
        <meta content={theme.colors.primary} name='msapplication-TileColor' />
        <meta content='/browserconfig.xml' name='msapplication-config' />
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <div className='flex flex-1'>
        <main className='container relative flex-1 px-4 py-5 mx-auto'>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} key={router.route} />
          </MDXProvider>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
