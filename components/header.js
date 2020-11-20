import Link from 'next/link';

import useTranslation from '@/i18n/useTranslation';
import LanguageSelector from './language-selector';
import Logo from './logo';
import NavLinks from './nav-links';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='sticky top-0 z-10 text-gray-600 blurry-bg'>
      <header className='container relative flex items-center px-4 py-6 mx-auto'>
        <div className='relative w-5/12'>
          <NavLinks />
        </div>
        <div className='flex justify-center w-2/12'>
          <Link href='/'>
            <a
              aria-label={t('home')}
              title={t('home')}
              className='inline-block px-2 text-current'
            >
              <Logo className='w-10 stroke-2 group' />
            </a>
          </Link>
        </div>
        <div className='flex justify-end w-5/12'>
          <LanguageSelector />
        </div>
      </header>
    </div>
  );
};

export default Header;
