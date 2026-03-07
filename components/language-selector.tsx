'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { ChangeEvent } from 'react';

import useTranslation from '@/i18n/useTranslation';

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const currentLocale = pathname.startsWith('/es') ? 'es' : 'en';

  const navigate = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    let newPath: string;
    if (selectedLocale === 'es') {
      newPath = pathname.startsWith('/es') ? pathname : `/es${pathname}`;
    } else {
      newPath = pathname.startsWith('/es') ? pathname.slice(3) || '/' : pathname;
    }
    router.push(newPath);
  };

  return (
    <label className='inline-flex group'>
      <select
        className='transition-colors bg-transparent border-gray-600 rounded-full appearance-none cursor-pointer pr-7 hover:border-secondary focus:ring-0 focus:border-secondary'
        onChange={navigate}
        value={currentLocale}
        title={t('language')}
      >
        {['en', 'es'].map((loc) => (
          <option key={loc} value={loc}>
            {t(`locale-${loc}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
