import Link from 'next/link';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface HeadingProps {
  className?: string;
  children: ReactNode;
  linkTo?: string;
}

const Heading = ({ className, children, linkTo }: HeadingProps) => (
  <h1
    className={clsx(
      'text-4xl font-bold leading-none tracking-tight text-center md:text-left md:font-extrabold md:text-5xl',
      className
    )}
  >
    {linkTo ? (
      <Link href={linkTo} className='gradient-text'>
        {children}
      </Link>
    ) : (
      <span className='gradient-text'>{children}</span>
    )}
  </h1>
);

export default Heading;
