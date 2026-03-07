import Footer from '@/components/footer';
import Header from '@/components/header';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />
      <div className='flex flex-1 md:before:fixed md:before:z-50 md:before:p-2 md:before:top-0 md:before:bottom-0 md:before:right-0 md:before:bg-accent md:after:fixed md:after:z-50 md:after:p-2 md:after:right-0 md:after:left-0 md:after:bg-gradient-to-r md:after:from-secondary md:after:via-middle md:after:to-accent md:after:bottom-0'>
        <main className='container relative flex-1 px-4 py-5 mx-auto'>
          {children}
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
