'use client';

import { useParams } from 'next/navigation';

import Strings from './strings';

const useTranslation = () => {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  const t = (key: string): string => {
    try {
      if (!Strings[locale]?.[key]) {
        console.warn(`No string '${key}' for locale '${locale}'`);
        return Strings['en']?.[key] || key;
      }
      return Strings[locale][key];
    } catch {
      return key;
    }
  };

  return { locale, t };
};

export default useTranslation;
