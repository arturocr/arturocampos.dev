export default function Logo({ ...props }) {
  return (
    <svg
      fill='none'
      viewBox='0 0 36 49'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='stroke-current'
        d='M21.2 20L25.4667 2L2 25.9633L14.8 29L10.5333 47L34 23.0367L21.2 20Z'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
      />
      <path
        d='M29 15H29.01'
        stroke='#f04770'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      />
      <path
        d='M7 34H7.01'
        stroke='#f04770'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      />
    </svg>
  );
}
