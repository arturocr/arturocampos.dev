import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

const CustomLink = (props: ComponentPropsWithoutRef<'a'>) => {
  const href = props.href;
  const isInternalLink = href?.startsWith('/');
  const isAnchorLink = href?.startsWith('#');

  if (isInternalLink) {
    return (
      <Link
        href={href!}
        className='transition-colors text-middle hover:text-secondary'
        {...props}
      ></Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a
        className='transition-colors text-middle hover:text-secondary'
        href={href!}
        {...props}
      />
    );
  }

  return (
    <a
      className='transition-colors text-middle hover:text-secondary'
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
};

const InlineCode = (props: ComponentPropsWithoutRef<'code'>) => (
  <code
    className='px-2 py-1 -my-1 rounded-md bg-prism-bg text-prism-base'
    {...props}
  />
);

const MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className='mt-5 mb-3 text-3xl font-extrabold leading-snug' {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className='mt-4 mb-3 text-2xl font-bold leading-tight' {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 className='mt-3 mb-2 text-xl font-semibold' {...props} />,
  h4: (props: ComponentPropsWithoutRef<'h4'>) => <h4 className='my-2 text-lg font-medium' {...props} />,
  inlineCode: InlineCode,
  kbd: InlineCode,
  p: (props: ComponentPropsWithoutRef<'p'>) => <p className='my-4' {...props} />,
  a: CustomLink,
  ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul className='my-3 ml-6 list-disc list-outside' {...props} />,
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className='my-3 ml-6 list-decimal list-outside' {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => <li className='my-2' {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className='relative px-12 py-2 overflow-hidden font-light text-gray-800 bg-gray-300 rounded-md'
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <table className='w-full my-4 border-collapse table-auto' {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<'tr'>) => <tr className='border-b border-gray-200 last:border-b-0' {...props} />,
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className='px-4 py-2 border-b-2 border-r border-gray-400 last:border-r-0'
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className='px-4 py-2 font-light border-r border-gray-400 last:border-r-0'
      {...props}
    />
  ),
};

export default MDXComponents;
