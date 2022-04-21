import Head from 'next/head';
import Logo from '../components/logo';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Arturo Campos - Front-end Architect</title>
        <meta name='title' content='Arturo Campos - Front-end Architect' />
        <meta
          name='description'
          content='Online Resume of Front-end Architect Arturo Campos'
        />
        <meta
          property='og:title'
          content='Arturo Campos - Front-end Architect'
        />
        <meta
          property='og:description'
          content='Online Resume of Front-end Architect Arturo Campos'
        />
        <meta
          property='og:image'
          content='https://arturocampos.dev/images/og.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://resume.arturocampos.dev/'
        />
        <meta
          property='twitter:title'
          content='Arturo Campos - Front-end Architect'
        />
        <meta
          property='twitter:description'
          content='Online Resume of Front-end Architect Arturo Campos'
        />
        <meta
          property='twitter:image'
          content='https://arturocampos.dev/images/og.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f04770' />
        <meta
          name='apple-mobile-web-app-title'
          content='Arturo Campos - Front-end Architect'
        />
        <meta
          name='application-name'
          content='Arturo Campos - Front-end Architect'
        />
        <meta name='msapplication-TileColor' content='#f04770' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <main>
        <div className='max-w-2xl p-6 mx-auto bg-white page print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16'>
          <header className='flex items-center mb-8'>
            <div className='mr-3'>
              <Logo className='h-12 stroke-2' />
            </div>
            <h1 className='flex items-center text-2xl font-medium text-gray-750 print:block'>
              Arturo Campos{' '}
              <span className='pl-2 ml-2 text-xl border-l-2 font-extralight text-gray-550 border-gray print:border-gray print:border-l-2 print:ml-2 print:pl-2'>
                Front-end Architect
              </span>
            </h1>
          </header>
          <div className='md:col-count-2 print:col-count-2 gap-md md:h-letter-col print:h-letter-col col-fill-auto'>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  ABOUT ME
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <p className='mt-2.1 text-md text-gray-700 leading-normal'>
                    Passionate engineer based in Costa Rica; happily married to
                    Marisol and proud father of Sol &amp; Nico.
                  </p>
                  <p className='mt-2.1 text-md text-gray-700 leading-normal'>
                    I started my career as a Back-End Developer, but after some
                    time I realized that I have more fun working with
                    client-side technologies. Since then{' '}
                    <span className='font-medium'>
                      JavaScript is my passion
                    </span>
                    , enjoying it a little bit more every single day for the
                    last 13 years.
                  </p>
                </section>
              </div>
            </section>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  INTERESTS
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      <span className='font-medium'>Family:</span> I am a family
                      guy, I love to invest time with my wife and kids who are
                      still pretty young (6 and 8).
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      <span className='font-medium'>Open Source Software:</span>{' '}
                      I enjoy exploring open source projects built on top of
                      JavaScript.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px z-10'>
                        ›
                      </span>
                      <span className='font-medium'>Mountain Biking:</span> I
                      have lots of fun on my bike. I used to take part in
                      professional races, but now it&apos;s just a recreational
                      hobby.
                    </li>
                  </ul>
                </section>
              </div>
            </section>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  SKILLS
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      JavaScript
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      Senior Level
                    </p>
                  </header>
                  <div className='my-3.2 last:pb-1.5'>
                    <ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES6
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES7
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES8
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        React
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Next.js
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Angular
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Vue
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Node
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Ember
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Gatsby
                      </li>
                      <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Nuxt.js
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <section className='mb-4.5 break-inside-avoid'>
                <header>
                  <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                    Other
                  </h3>
                </header>
                <div className='my-3.2 last:pb-1.5'>
                  <ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      CSS
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      PostCSS
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Tailwind CSS
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      HTML5
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Git
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Webpack
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Linux
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      UI Design
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Photoshop
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Illustrator
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Sketch
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Figma
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Vercel
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Azure
                    </li>
                    <li className='px-2 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      PHP
                    </li>
                  </ul>
                </div>
              </section>
            </section>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  EDUCATION
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      University of Costa Rica
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      2004 – 2007 | Bachelor&apos;s Degree in Software
                      Engineering
                    </p>
                  </header>
                </section>
              </div>
            </section>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  CONTACT
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <ul className='list-inside pr-7'>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a
                        href='https://arturocampos.dev'
                        className='group'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3'></path>
                          <line x1='8' y1='12' x2='16' y2='12'></line>
                        </svg>
                        arturocampos.dev
                        <span className='inline-block ml-1 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700'>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a
                        href='https://twitter.com/arturocr'
                        className='group'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                        </svg>
                        twitter.com/arturocr
                        <span className='inline-block ml-1 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700'>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a
                        href='https://github.com/arturocr'
                        className='group'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-middle'
                          fill='currentColor'
                          stroke='none'
                          viewBox='0 0 24 24'
                        >
                          <path d='m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z' />
                        </svg>
                        github.com/arturocr
                        <span className='inline-block ml-1 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700'>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a
                        href='https://www.linkedin.com/in/arturocr/'
                        className='group'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-baseline'
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                        >
                          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                          <rect x='2' y='9' width='4' height='12'></rect>
                          <circle cx='4' cy='4' r='2'></circle>
                        </svg>
                        linkedin.com/arturocr
                        <span className='inline-block ml-1 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700'>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <svg
                        className='inline-block w-4 h-4 mr-1 align-baseline'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <circle cx='12' cy='11' r='3' />
                        <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z' />
                      </svg>
                      Cartago, Costa Rica
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a href='&#109;&#097;&#105;&#108;&#116;&#111;:&#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;'>
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-middle'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                          />
                        </svg>
                        &#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md hidden print:block'>
                      <a href='&#116;&#101;&#108;&#58;&#43;&#53;&#48;&#54;&#56;&#56;&#56;&#57;&#45;&#54;&#52;&#48;&#50;'>
                        <svg
                          className='inline-block w-4 h-4 mr-1 align-middle'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                        </svg>
                        &#40;&#43;&#53;&#48;&#54;&#41;{' '}
                        &#56;&#56;&#56;&#57;&#45;&#54;&#52;&#48;&#50;
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-2.5 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  EXPERIENCE
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      Parsley Health
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      Jul 2021 – Apr 2022 | Principal Software Engineer / Pod
                      Lead
                    </p>
                  </header>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Coordinate with Product and Design teams in the definition
                      and scoping of software development.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Actively participate in the development and maintenance of
                      software that embodies and enables the mission and vision
                      of the company.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Manage direct report resources and enable them with
                      anything necessary to accomplish the goals of the team.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Report with certain metrics to managers about team
                      throughput and performance.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Collaborate with the recruiting team on the interviewing
                      process and decision-making about new hires.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Coordinate with other pod leads to sync on the forward
                      movement of epics development without unnecessary efforts
                      and optimizing the process.
                    </li>
                  </ul>
                </section>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      Gorilla Logic
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      Jun 2016 – Jul 2021 | Solutions Architect / Web Practice
                      Lead
                    </p>
                  </header>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Decide, propose and implement systems architectures that
                      align with and solve (existing and new) client&apos;s
                      needs.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Actively code, lead and deliver high-quality solutions to
                      clients.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Collaborate with the recruiting team: filtering
                      candidates, evaluating entry tests, and conducting
                      technical screenings.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Promote internal community activities, help with mentoring
                      of colleagues and technical assessments to identify and
                      attack areas of improvement.
                    </li>
                  </ul>
                </section>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      Edify Software Consulting
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      Apr 2011 – Jun 2016 | Senior Front-end Developer
                    </p>
                  </header>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      Built highly responsive web applications for the EdTech
                      industry.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      Maintained and improved existing JavaScript applications.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal relative'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      Led development efforts behind JavaScript-intense
                      applications, using VanillaJS, Backbone.js, and Ember.js.
                    </li>
                  </ul>
                  <p className='mt-4.5 pt-4.5 text-md text-gray-700 leading-normal border-gray border-t'>
                    There&apos;s more, learn about my experience on{' '}
                    <a
                      className='group'
                      href='https://www.linkedin.com/in/arturocr/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      LinkedIn
                      <span className='inline-block ml-1 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700'>
                        ↗
                      </span>
                    </a>
                  </p>
                </section>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
