declare module 'react-anchor-link-smooth-scroll' {
  import { ComponentPropsWithoutRef } from 'react';

  interface AnchorLinkProps extends ComponentPropsWithoutRef<'a'> {
    offset?: (() => number) | number;
    href: string;
  }

  const AnchorLink: React.FC<AnchorLinkProps>;
  export default AnchorLink;
}
