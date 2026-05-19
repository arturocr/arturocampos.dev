'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import useTranslation from '@/i18n/useTranslation';

const FlagUS = () => (
  <svg
    viewBox='0 0 20 15'
    className='w-5 h-[15px] rounded-sm shrink-0'
    aria-hidden='true'
  >
    <rect width='20' height='15' fill='#B22234' />
    <rect y='1.154' width='20' height='1.154' fill='white' />
    <rect y='3.462' width='20' height='1.154' fill='white' />
    <rect y='5.769' width='20' height='1.154' fill='white' />
    <rect y='8.077' width='20' height='1.154' fill='white' />
    <rect y='10.385' width='20' height='1.154' fill='white' />
    <rect y='12.692' width='20' height='1.154' fill='white' />
    <rect width='8' height='8.077' fill='#3C3B6E' />
  </svg>
);

const FlagES = () => (
  <svg
    viewBox='0 0 20 15'
    className='w-5 h-[15px] rounded-sm shrink-0'
    aria-hidden='true'
  >
    <rect width='20' height='15' fill='#c60b1e' />
    <rect y='3.75' width='20' height='7.5' fill='#ffc400' />
  </svg>
);

const flags: Record<string, () => React.JSX.Element> = {
  en: FlagUS,
  es: FlagES,
};

const locales = ['en', 'es'];

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentLocale = pathname.startsWith('/es') ? 'es' : 'en';

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const navigate = (locale: string) => {
    close(false);
    if (locale === currentLocale) return;
    const newPath =
      locale === 'es'
        ? `/es${pathname}`
        : pathname.startsWith('/es')
          ? pathname.slice(3) || '/'
          : pathname;
    router.push(newPath);
  };

  // Focus first item when menu opens
  useEffect(() => {
    if (open) itemRefs.current[0]?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      itemRefs.current[(index + 1) % locales.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      itemRefs.current[(index - 1 + locales.length) % locales.length]?.focus();
    } else if (e.key === 'Tab') {
      close(false);
    }
  };

  const CurrentFlag = flags[currentLocale];

  return (
    <div ref={containerRef} className='relative'>
      <button
        ref={triggerRef}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={e => e.key === 'Escape' && close()}
        className='flex items-center gap-1.5 px-2 py-1 rounded-md border border-gray-400 text-sm text-gray-700 hover:border-secondary transition-colors cursor-pointer'
        aria-label={t('language')}
        aria-expanded={open}
        aria-controls='language-menu'
      >
        <CurrentFlag />
        <span>{t(`locale-${currentLocale}`)}</span>
        <svg
          viewBox='0 0 10 6'
          className={`w-2.5 h-2.5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          aria-hidden='true'
        >
          <path d='M1 1l4 4 4-4' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </button>

      {open && (
        <ul
          id='language-menu'
          role='menu'
          className='absolute right-0 mt-1 w-24 rounded-md border border-gray-200 bg-white shadow-md py-1 z-20'
        >
          {locales.map((loc, i) => {
            const Flag = flags[loc];
            return (
              <li key={loc} role='none'>
                <button
                  ref={el => {
                    itemRefs.current[i] = el;
                  }}
                  role='menuitem'
                  onClick={() => navigate(loc)}
                  onKeyDown={e => handleMenuKeyDown(e, i)}
                  className={`flex items-center gap-2 w-full px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors ${
                    loc === currentLocale
                      ? 'text-secondary font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  <Flag />
                  <span>{t(`locale-${loc}`)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
