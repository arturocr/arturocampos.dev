import { useState } from 'react';
import clsx from 'clsx';

import ActiveLink from '@/components/active-link';
import useTranslation from '@/i18n/useTranslation';

const NavLinks = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onTap = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='lg:hidden'>
        <button
          aria-label={t('open-menu')}
          title={t('open-menu')}
          className='p-1 -mr-1 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={clsx('w-10 h-10', isMenuOpen && 'opened')}
            fill='currentColor'
            id='menu-icon'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058' />
            <path d='M 20,50 H 80' />
            <path d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942' />
          </svg>
        </button>
      </div>
      <nav
        className={clsx(
          'absolute top-0 flex flex-col px-5 ml-12 space-y-4 overflow-hidden whitespace-nowrap transition-all bg-white rounded-md shadow-md opacity-0 lg:opacity-100 lg:bg-transparent lg:h-auto lg:flex-row lg:space-y-0 lg:ml-0 lg:space-x-2 lg:p-0 lg:rounded-none lg:relative lg:shadow-none',
          isMenuOpen
            ? 'h-auto py-4 border opacity-100 lg:border-none'
            : 'h-0 border-transparent'
        )}
      >
        <ActiveLink
          activeClassName='border-middle text-middle'
          href='/blog'
          aria-label={t('blog')}
          className='px-1 font-semibold tracking-tighter text-current uppercase transition-colors border-l-4 border-transparent lg:border-l-0 lg:border-b-4 lg:pt-1 hover:border-secondary'
          onClick={onTap}
          title={t('blog')}
        >
          <span>{t('blog')}</span>
        </ActiveLink>
        <ActiveLink
          activeClassName='border-middle text-middle'
          href='/projects'
          aria-label={t('projects')}
          className='px-1 font-semibold tracking-tighter text-current uppercase transition-colors border-l-4 border-transparent lg:border-l-0 lg:border-b-4 lg:pt-1 hover:border-secondary'
          onClick={onTap}
          title={t('projects')}
        >
          <span>{t('projects')}</span>
        </ActiveLink>
        <ActiveLink
          activeClassName='border-middle text-middle'
          href='/uses'
          aria-label={`/${t('uses')}`}
          className='px-1 font-semibold tracking-tighter text-current uppercase transition-colors border-l-4 border-transparent lg:border-l-0 lg:border-b-4 lg:pt-1 hover:border-secondary'
          onClick={onTap}
          title={`/${t('uses')}`}
        >
          <span>{`/${t('uses')}`}</span>
        </ActiveLink>
        <a
          aria-label={t('resume')}
          className='flex items-center px-1 font-semibold tracking-tighter text-current uppercase transition-colors border-l-4 border-transparent lg:border-l-0 lg:border-b-4 lg:pt-1 hover:border-secondary'
          href='https://arturocampos.dev/ResumeArturoCampos.pdf'
          onClick={onTap}
          rel='noopener noreferrer'
          target='_blank'
          title={t('resume')}
        >
          {t('resume')}
        </a>
      </nav>
    </>
  );
};

export default NavLinks;
