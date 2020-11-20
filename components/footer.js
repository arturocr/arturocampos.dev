import useTranslation from '@/i18n/useTranslation';
import ContactLinks from '@/components/contact-links';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='w-full pt-3 pb-2 text-sm font-light text-center text-gray-600 bg-gray-100'>
      <p className='my-0'>
        &copy; {new Date().getFullYear()} Arturo Campos | {t('made-with')}{' '}
        <span aria-label={t('love')} className='align-middle' role='img'>
          ♥️
        </span>{' '}
        {t('and')}{' '}
        <span aria-label={t('coffee')} className='align-middle' role='img'>
          ☕️
        </span>
      </p>
      <ContactLinks />
    </footer>
  );
};

export default Footer;
