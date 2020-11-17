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
    <label className='relative inline-flex group'>
      <svg
        className='absolute top-0 right-0 w-2 h-2 my-4 mr-3 transition-colors duration-200 pointer-events-none group-hover:text-secondary'
        viewBox='0 0 412 232'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
          fill='currentColor'
          fillRule='nonzero'
        />
      </svg>
      <select
        className='h-10 pl-3 pr-6 font-light transition-colors duration-200 bg-transparent border border-gray-600 rounded-full appearance-none cursor-pointer hover:border-secondary focus:outline-none'
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
