const Logo = ({ className }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 36 49'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      className='transition-colors stroke-current group-hover:text-accent'
      d='M21.2 20L25.4667 2L2 25.9633L14.8 29L10.5333 47L34 23.0367L21.2 20Z'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      className='transition-colors stroke-current text-middle group-hover:text-secondary'
      d='M29 15H29.01'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      className='transition-colors stroke-current text-middle group-hover:text-secondary'
      d='M7 34H7.01'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Logo;
