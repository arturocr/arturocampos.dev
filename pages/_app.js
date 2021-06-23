import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import Footer from '@/components/footer';
import Header from '@/components/header';
import MDXComponents from '@/components/mdx-components';
import SEO from '../next-seo.config';
import { pageview } from '@/lib/gtag';
import theme from '@/lib/theme';

import '@/styles/globals.css';
import '@/styles/custom.css';
import '@/styles/prism.css';

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url, document.title);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

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
      <div className='flex flex-1 md:before:fixed md:before:z-50 md:before:p-2 md:before:top-0 md:before:bottom-0 md:before:right-0 md:before:bg-accent md:after:fixed md:after:z-50 md:after:p-2 md:after:right-0 md:after:left-0 md:after:bg-gradient-to-r md:after:from-secondary md:after:via-middle md:after:to-accent md:after:bottom-0'>
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
