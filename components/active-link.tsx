'use client';

import React, { Children, type ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LinkProps } from 'next/link';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement<{ className?: string }>;
  activeClassName: string;
  className?: string;
  [key: string]: unknown;
}

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const className = pathname.startsWith(props.href as string)
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props} scroll>
      {React.cloneElement(child, {
        className: className || undefined,
      })}
    </Link>
  );
};

export default ActiveLink;
