import { useState } from 'react';
import clsx from 'clsx';
import useSWR from 'swr';

import useTranslation from '@/i18n/useTranslation';
import fetcher from '@/lib/fetcher';
import Sidebar from './sidebar';
import Tracts from './tracts';

const Calculator = ({ salaryCurrencies, socialSecurityTax, tracts }) => {
  const { t } = useTranslation();
  const [calculatorState, setCalculatorState] = useState({
    exchangeRate: 0,
    salary: 0,
    salaryCurrency: salaryCurrencies[0].value,
  });

  useSWR('https://tipodecambio.paginasweb.cr/api', fetcher, {
    revalidateOnFocus: false,
    onSuccess: data => {
      setCalculatorState({
        ...calculatorState,
        exchangeRate: data.compra,
      });
    },
  });

  const calculatedSalary =
    calculatorState.salaryCurrency === 'CRC'
      ? calculatorState.salary
      : calculatorState.exchangeRate * calculatorState.salary;

  const tractDeductible = tract => {
    let tractDiff = 0;
    if (calculatedSalary < tract.from) {
      tractDiff = 0;
    } else if (calculatedSalary <= tract.to) {
      tractDiff = calculatedSalary - tract.from;
    } else if (tract.to !== null && calculatedSalary > tract.to) {
      tractDiff = tract.to - tract.from;
    } else if (calculatedSalary > tract.from && tract.to === null) {
      tractDiff = calculatedSalary - tract.from;
    }
    return (tractDiff * tract.percentage) / 100;
  };

  const tractsWithDeductible = tracts.map(tract => ({
    ...tract,
    deductible: tractDeductible(tract),
  }));

  const rentDeductions = tractsWithDeductible.reduce(
    (acc, tract) => acc + tract.deductible,
    0
  );

  return (
    <>
      <div className='flex flex-col my-4 space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0'>
        <div className='flex items-stretch flex-1'>
          <span className='flex items-center text-sm leading-normal whitespace-no-wrap'>
            <select
              className='transition-colors border-gray-300 rounded-l pr-9 focus:ring-0 focus:border-secondary'
              defaultValue={calculatorState.salaryCurrency}
              onChange={e =>
                setCalculatorState({
                  ...calculatorState,
                  salaryCurrency: e.target.value,
                })
              }
            >
              {salaryCurrencies.map(salaryCurrency => (
                <option key={salaryCurrency.value} value={salaryCurrency.value}>
                  {salaryCurrency.symbol}
                </option>
              ))}
            </select>
          </span>
          <input
            defaultValue={calculatorState.salary || undefined}
            className='flex-1 flex-grow flex-shrink -ml-px placeholder-gray-400 transition-colors border-gray-300 rounded rounded-l-none focus:ring-0 focus:border-secondary'
            onChange={e =>
              setCalculatorState({
                ...calculatorState,
                salary: e.target.value,
              })
            }
            placeholder={t('your-salary')}
            type='number'
          />
        </div>
        <div
          className={clsx(
            'group relative flex items-stretch flex-1 transition-opacity',
            salaryCurrencies[1].value === calculatorState.salaryCurrency &&
              'opacity-0'
          )}
        >
          <div className='flex -mr-px'>
            <span className='flex items-center px-3 text-sm leading-normal whitespace-no-wrap border border-gray-300 rounded rounded-r-none group-focus:border-secondary'>
              {salaryCurrencies[1].symbol}
            </span>
          </div>
          <input
            defaultValue={calculatorState.exchangeRate || undefined}
            className='relative flex-1 flex-grow flex-shrink placeholder-gray-400 transition-colors border-gray-300 rounded rounded-l-none focus:ring-0 focus:border-secondary'
            onChange={e =>
              setCalculatorState({
                ...calculatorState,
                exchangeRate: e.target.value,
              })
            }
            placeholder={t('exchange-rate')}
            type='number'
          />
        </div>
      </div>
      <Tracts tracts={tractsWithDeductible} />
      <Sidebar
        salary={calculatedSalary}
        socialSecurityTax={socialSecurityTax}
        rentDeductions={rentDeductions}
      />
    </>
  );
};

export default Calculator;
