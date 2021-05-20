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
      ? parseFloat(calculatorState.salary || 0)
      : calculatorState.exchangeRate * parseFloat(calculatorState.salary || 0);

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

  const getCurrencySymbol = () =>
    salaryCurrencies.find(
      currency => currency.value === calculatorState.salaryCurrency
    )['symbol'];

  return (
    <>
      <div className='flex flex-col my-4 space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0'>
        <div className='flex-1'>
          <label
            className='block text-sm font-medium text-gray-700'
            htmlFor='salary'
          >
            {t('your-salary')}
          </label>
          <div className='relative mt-1 font-mono rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <span className='text-gray-500'>{getCurrencySymbol()}</span>
            </div>
            <input
              className='block w-full pr-16 border-gray-300 rounded-md focus:ring-secondary focus:border-secondary pl-7'
              id='salary'
              min={0}
              name='salary'
              onChange={e =>
                setCalculatorState({
                  ...calculatorState,
                  salary: Math.abs(e.target.value),
                })
              }
              placeholder='0.00'
              type='number'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <label htmlFor='currency' className='sr-only'>
                Currency
              </label>
              <select
                className='h-full py-0 pl-2 pr-8 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-secondary focus:border-secondary'
                defaultValue={calculatorState.salaryCurrency}
                id='currency'
                name='currency'
                onChange={e =>
                  setCalculatorState({
                    ...calculatorState,
                    salaryCurrency: e.target.value,
                  })
                }
              >
                {salaryCurrencies.map(salaryCurrency => (
                  <option
                    key={salaryCurrency.value}
                    value={salaryCurrency.value}
                  >
                    {salaryCurrency.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'flex-1 transition-opacity',
            salaryCurrencies[1].value === calculatorState.salaryCurrency &&
              'opacity-0 hidden sm:flex'
          )}
        >
          <label
            className='block text-sm font-medium text-gray-700'
            htmlFor='exchangeRate'
          >
            {t('exchange-rate')}
          </label>
          <div className='relative mt-1 font-mono rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <span className='text-gray-500'>
                {salaryCurrencies[1].symbol}
              </span>
            </div>
            <input
              className='block w-full pr-12 border-gray-300 rounded-md focus:ring-secondary focus:border-secondary pl-7'
              defaultValue={calculatorState.exchangeRate || undefined}
              id='exchangeRate'
              min={0}
              name='exchangeRate'
              onChange={e =>
                setCalculatorState({
                  ...calculatorState,
                  exchangeRate: Math.abs(e.target.value),
                })
              }
              placeholder='0.00'
              type='number'
            />
          </div>
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
