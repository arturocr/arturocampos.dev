import Link from 'next/link';
import clsx from 'clsx';

const Heading = ({ className, children, linkTo }) => (
  <h1
    className={clsx(
      'text-4xl font-bold leading-none tracking-tight text-center md:text-left md:font-extrabold md:text-5xl',
      className
    )}
  >
    {linkTo ? (
      <Link href={linkTo}>
        <a className='gradient-text'>{children}</a>
      </Link>
    ) : (
      <span className='gradient-text'>{children}</span>
    )}
  </h1>
);

export default Heading;
