import Link from 'next/link';

import { getTranslation } from '@/i18n/getTranslation';
import { getLocalizedPath } from '@/lib/util';
import LanguageSelector from './language-selector';
import Logo from './logo';
import NavLinks from './nav-links';

interface HeaderProps {
  locale: string;
}

const Header = ({ locale }: HeaderProps) => {
  const { t } = getTranslation(locale);
  const homePath = getLocalizedPath(locale, '/');

  return (
    <div className='sticky top-0 z-10 text-gray-600 bg-white/75 backdrop-blur-md md:mx-4 md:pt-4'>
      <header className='container relative flex items-center px-4 py-6 mx-auto'>
        <div className='relative w-5/12'>
          <NavLinks />
        </div>
        <div className='flex justify-center w-2/12'>
          <Link
            href={homePath}
            aria-label={t('home')}
            title={t('home')}
            className='inline-block px-2 text-current'>

            <Logo className='w-10 stroke-2 group' />

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
