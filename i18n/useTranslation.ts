import { useRouter } from 'next/router';

import Strings from './strings';

const useTranslation = () => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const t = (key: string): string => {
    try {
      const loc = locale || 'en';
      const defLoc = defaultLocale || 'en';
      if (!Strings[loc][key]) {
        console.warn(`No string '${key}' for locale '${loc}'`);
        return key;
      }
      return Strings[loc][key] || Strings[defLoc][key] || key;
    } catch (error) {
      return key;
    }
  };

  return { t };
};

export default useTranslation;
