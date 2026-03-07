import Strings from './strings';

export const getTranslation = (locale: string) => {
  const t = (key: string): string => {
    try {
      const loc = locale || 'en';
      if (!Strings[loc]?.[key]) {
        console.warn(`No string '${key}' for locale '${loc}'`);
        return Strings['en']?.[key] || key;
      }
      return Strings[loc][key];
    } catch {
      return key;
    }
  };

  return { t };
};
