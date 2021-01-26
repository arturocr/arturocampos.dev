import useTranslation from '@/i18n/useTranslation';
import { currencyFormatter } from '@/lib/util';

const Sidebar = ({ salary, rentDeductions, socialSecurityTax }) => {
  const { t } = useTranslation();
  const socialSecurityDeduction = (salary * socialSecurityTax) / 100;
  const totalDeductions = rentDeductions + socialSecurityDeduction;
  const retentionPercentage = (totalDeductions / salary) * 100 || 0;

  return (
    <>
      <table className='w-full my-8 leading-tight table-auto'>
        <caption className='text-2xl font-semibold leading-relaxed text-left'>
          {t('details')}
        </caption>
        <tbody>
          <tr className='border-t'>
            <td className='py-2'>{t('gross-salary')}:</td>
            <td className='pr-2 text-right'>{currencyFormatter(salary)}</td>
          </tr>
          <tr className='border-t'>
            <td className='py-2'>{t('income-taxes')}:</td>
            <td className='pr-2 text-right'>
              {currencyFormatter(rentDeductions)}
            </td>
          </tr>
          <tr className='border-t'>
            <td className='py-2'>
              {t('ccss')} ({socialSecurityTax}%):
            </td>
            <td className='pr-2 text-right'>
              {currencyFormatter(socialSecurityDeduction)}
            </td>
          </tr>
          <tr className='border-t'>
            <td className='py-2'>
              <strong>{t('total-deductions')}:</strong>
            </td>
            <td className='pr-2 text-right'>
              {currencyFormatter(totalDeductions)}
            </td>
          </tr>
          <tr className='border-t'>
            <td className='py-2'>
              <strong>{t('net-salary')}:</strong>
            </td>
            <td className='pr-2 text-right'>
              {currencyFormatter(salary - totalDeductions)}
            </td>
          </tr>
          <tr className='border-t border-b'>
            <td className='py-2'>
              <strong>{t('percentage-retained')}:</strong>
            </td>
            <td className='pr-2 text-right'>
              {retentionPercentage > 0 ? '~' : ''}
              {Math.round(retentionPercentage * 10000) / 10000}%
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Sidebar;
