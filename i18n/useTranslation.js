import { useRouter } from 'next/router';

import Strings from './strings';

const useTranslation = () => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const t = key => {
    try {
      if (!Strings[locale][key]) {
        console.warn(`No string '${key}' for locale '${locale}'`);
        return key;
      }
      return Strings[locale][key] || Strings[defaultLocale][key] || key;
    } catch (error) {
      return key;
    }
  };

  return { t };
};

export default useTranslation;
