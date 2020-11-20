export default function Logo({ ...props }) {
  return (
    <svg viewBox='0 0 32 42' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        className='transition-colors duration-200 group-hover:text-accent'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.1,16.9L23.7,1L1,22.3l11.9,2.8L8.3,41L31,19.8L19.1,16.9z'
      />
      <path
        className='transition-colors duration-200 fill-current group-hover:text-secondary text-middle'
        fill='currentColor'
        stroke='#f04770'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M25.1,12.4c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5C25.3,12.9,25.1,12.7,25.1,12.4z'
      />
      <path
        className='transition-colors duration-200 fill-current group-hover:text-secondary text-middle'
        stroke='#f04770'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.9,29.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5S5.9,29.9,5.9,29.6z'
      />
    </svg>
  );
}
