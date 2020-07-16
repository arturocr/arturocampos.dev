import Head from 'next/head';
import Logo from '../components/logo';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Arturo Campos - Senior Front End Engineer</title>
        <meta
          name='title'
          content='Arturo Campos - Senior Front End Engineer'
        />
        <meta
          name='description'
          content='Online Resume of Senior Front End Engineer Arturo Campos'
        />
        <meta
          property='og:title'
          content='Arturo Campos - Senior Front End Engineer'
        />
        <meta
          property='og:description'
          content='Online Resume of Senior Front End Engineer Arturo Campos'
        />
        <meta
          property='og:image'
          content='https://resume.arturocampos.dev/images/share.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://resume.arturocampos.dev/'
        />
        <meta
          property='twitter:title'
          content='Arturo Campos - Senior Front End Engineer'
        />
        <meta
          property='twitter:description'
          content='Online Resume of Senior Front End Engineer Arturo Campos'
        />
        <meta
          property='twitter:image'
          content='https://resume.arturocampos.dev/images/share.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <main>
        <div className='p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white'>
          <header className='flex items-center mb-8 md:mb-11'>
            <div className='mr-5'>
              <Logo className='h-12 w-12' />
            </div>
            <h1 className='text-2xl font-medium text-gray-750 pb-px'>
              Arturo Campos -{' '}
              <span className='text-xl font-thin text-gray-500'>
                Senior Front End Engineer
              </span>
            </h1>
          </header>

          <div className='md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto'>
            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  ABOUT ME
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <p className='mt-2.1 text-md text-gray-700 leading-normal'>
                    Passionate developer based in Costa Rica, happily married to
                    Marisol and proud father of Sol &amp; Nico.
                  </p>
                  <p className='mt-2.1 text-md text-gray-700 leading-normal'>
                    I started my career as a Back End Developer, but after some
                    time I realized that I get a lot more excited about client
                    side technologies, since then I enjoy using JavaScript in
                    all it’s flavors.
                  </p>
                </section>
              </div>
            </section>

            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  INTERESTS
                </h2>

                <section className='mb-4.5 break-inside-avoid'>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      <span className='font-medium'>Family:</span> I am a family
                      guy, I love to invest time with my wife and kids who are
                      still pretty young (5 and 6) so they absorb a lot of our
                      energy and attention.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      <span className='font-medium'>Open Source Software:</span>{' '}
                      I enjoy exploring open source projects built on top of
                      JavaScript.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>
                      <span className='font-medium'>Mountain Biking:</span> I
                      have lots of fun on my bike. I used to take part in
                      professional races, but these days is just a recreational
                      hobby.
                    </li>
                  </ul>
                </section>
              </div>
            </section>

            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
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
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES6
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES7
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        ES8
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        React
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Angular
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Vue
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Node
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Ember
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Next.js
                      </li>
                      <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                        Gatsby
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
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      CSS
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      PostCSS
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Tailwind CSS
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      HTML5
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Git
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Webpack
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Linux Servers
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      UI Design
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Photoshop
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Illustrator
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Sketch
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Vercel
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      Azure
                    </li>
                    <li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200'>
                      PHP
                    </li>
                  </ul>
                </div>
              </section>
            </section>

            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  EDUCATION
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      University of Costa Rica
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      2004 – 2007 | Bachelor's Degree in Software Engineering
                    </p>
                  </header>
                </section>
              </div>
            </section>

            <section className='mt-8 first:mt-0'>
              <div className='break-inside-avoid'>
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
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
                          className='h-4 w-4 inline-block align-middle mr-1'
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
                        <span className='inline-block ml-1 text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in'>
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
                          className='h-4 w-4 inline-block align-middle mr-1'
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
                        <span className='inline-block ml-1 text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in'>
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
                          className='h-4 w-4 inline-block align-baseline mr-1'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                          <rect x='2' y='9' width='4' height='12'></rect>
                          <circle cx='4' cy='4' r='2'></circle>
                        </svg>
                        linkedin.com/arturocr
                        <span className='inline-block ml-1 text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in'>
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <svg
                        className='h-4 w-4 inline-block align-baseline mr-1'
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
                      San Ramón, Alajuela, Costa Rica
                    </li>
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a href='&#109;&#097;&#105;&#108;&#116;&#111;:&#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;'>
                        <svg
                          className='h-4 w-4 inline-block align-middle mr-1'
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
                    <li className='mt-1.5 leading-normal text-gray-700 text-md'>
                      <a href='&#116;&#101;&#108;&#58;&#43;&#53;&#48;&#54;&#56;&#56;&#56;&#57;&#45;&#54;&#52;&#48;&#50;'>
                        <svg
                          className='h-4 w-4 inline-block align-middle mr-1'
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
                <h2 className='mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal'>
                  EXPERIENCE
                </h2>
                <section className='mb-4.5 break-inside-avoid'>
                  <header>
                    <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                      Gorilla Logic
                    </h3>
                    <p className='leading-normal text-md text-gray-650'>
                      Jun 2016 – Present | Web Practice Lead / Senior Web
                      Developer
                    </p>
                  </header>
                  <ul>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Establish front-end and full stack best practices for
                      teams using Angular, React, Node.js and such.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Collaborate with the recruiting team: filtering
                      candidates, evaluating entry tests and conducting
                      technical screenings.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Provide mentorship to colleagues and perform assessments
                      to suggest areas of improvement.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Lead innovation and internal research projects.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Technically lead projects using state of the art
                      technologies.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Interact with other practice’s leads to ensure the
                      delivery of high performing solutions to the clients.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Coordinate and groom features with clients to later pass
                      to development teams for actual implementation.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Actively code and develop solutions for actual clients.
                    </li>
                    <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                      <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                        ›
                      </span>{' '}
                      Promote and organize activities like Lunch &amp; Learns,
                      workshops and more.
                    </li>
                  </ul>
                </section>
              </div>
              <section className='mb-4.5 break-inside-avoid'>
                <header>
                  <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                    Freelance Web Developer
                  </h3>
                  <p className='leading-normal text-md text-gray-650'>
                    2008 – Present | Senior Web Developer
                  </p>
                </header>
                <ul>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    I offer my skills for freelance projects in a variety of
                    technologies, mostly focused on front end development, but
                    also work on back-end services if needed.
                  </li>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    Some of the technologies I work on more regularly are:
                    ReactJS, Angular2+, EmberJS, VanillaJS, Wordpress, PHP,
                    MySQL, MongoDB, etc.
                  </li>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    Also, any needed designs are part of my offering as well
                    using tools like Adobe Creative Suite (Illustrator,
                    Photoshop, InDesign) and Sketch.
                  </li>
                </ul>
              </section>

              <section className='mb-4.5 break-inside-avoid'>
                <header>
                  <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>
                    Edify Software Consulting
                  </h3>
                  <p className='leading-normal text-md text-gray-650'>
                    Apr 2011 – Jun 2016 | Senior Front End Developer
                  </p>
                </header>
                <ul>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    Create highly responsive web applications for the EdTech
                    industry.
                  </li>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    Maintenance and performing enhancements to existing
                    JavaScript applications.
                  </li>
                  <li className='mt-2.1 text-md text-gray-700 leading-normal'>
                    <span className='absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px'>
                      ›
                    </span>
                    Leader of development team behind JavaScript-intense
                    applications, using VanillaJS, Backbone.js and Ember.js.
                  </li>
                </ul>
                <p className='mt-4.5 text-md text-gray-700 leading-normal'>
                  See additional experience on my{' '}
                  <a
                    className='group'
                    href='https://www.linkedin.com/in/arturocr/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    LinkedIn Profile
                    <span className='inline-block ml-1 text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in'>
                      ↗
                    </span>
                  </a>
                  .
                </p>
              </section>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
