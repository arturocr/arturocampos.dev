import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const className = asPath.startsWith(props.href)
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props} scroll>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
