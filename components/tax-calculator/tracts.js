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
                  {t('from')}{' '}
                  <span className='inline-block p-1 my-px font-mono bg-gray-200 rounded'>
                    {currencyFormatter(tract.from)}
                  </span>
                </>
              ) : null}{' '}
              {tract.to ? (
                <>
                  <span className={clsx(!tract.from && 'capitalize')}>
                    {t('up-to')}
                  </span>{' '}
                  <span className='inline-block p-1 my-px font-mono bg-gray-200 rounded'>
                    {currencyFormatter(tract.to)}
                  </span>
                </>
              ) : null}
            </td>
            <td className='px-5 font-mono text-right'>{tract.percentage}%</td>
            <td className='pr-2 text-right'>
              <span className='font-mono'>
                {currencyFormatter(tract.deductible)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tracts;
