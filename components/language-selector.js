import { useRouter } from 'next/router';

import useTranslation from '@/i18n/useTranslation';

const LanguageSelector = () => {
  const {
    locale,
    locales,
    asPath: currentRoute,
    push: navigateTo,
  } = useRouter();
  const { t } = useTranslation();

  const navigate = e => {
    const selectedLocale = e.target.value;
    navigateTo(currentRoute, currentRoute, { locale: selectedLocale });
  };

  return (
    <label className='inline-flex group'>
      <select
        className='font-light transition-colors bg-transparent border-gray-600 rounded-full appearance-none cursor-pointer pr-7 hover:border-secondary focus:ring-0 focus:border-secondary'
        onChange={navigate}
        defaultValue={locale}
        title={t('language')}
      >
        {locales.map(loc => (
          <option key={loc} value={loc}>
            {t(`locale-${loc}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
