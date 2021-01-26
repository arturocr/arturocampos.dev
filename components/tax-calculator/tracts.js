import clsx from 'clsx';

import useTranslation from '@/i18n/useTranslation';
import { currencyFormatter } from '@/lib/util';

const Tracts = ({ tracts }) => {
  const { t } = useTranslation();

  return (
    <table className='w-full my-8 leading-tight table-auto'>
      <caption className='text-2xl font-semibold leading-relaxed text-left'>
        {t('tracts')}*
      </caption>
      <tbody>
        {tracts.map(tract => (
          <tr
            key={tract.id}
            className={clsx(
              'border-t border-b transition-colors',
              tract.deductible > 0 && 'bg-opacity-30 bg-prism-regex'
            )}
          >
            <td className='py-2 text-right'>
              {tract.from ? (
                <>
                  {t('above-excedent')} {currencyFormatter(tract.from)}
                </>
              ) : null}{' '}
              {tract.to ? (
                <>
                  <span className={clsx(!tract.from && 'capitalize')}>
                    {t('until')}
                  </span>{' '}
                  {currencyFormatter(tract.to)}
                </>
              ) : null}
            </td>
            <td className='px-5 text-center'>{tract.percentage}%</td>
            <td className='pr-2 text-right'>
              {currencyFormatter(tract.deductible)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tracts;
