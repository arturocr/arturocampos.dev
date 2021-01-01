import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const CustomLink = props => {
  const href = props.href;
  const isAnchorLink = href?.startsWith('#');
  const isInternalLink = href?.startsWith('/');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          className='transition-colors text-middle hover:text-secondary'
          {...props}
        />
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <AnchorLink
        className='transition-colors text-middle hover:text-secondary'
        offset={() => 120} // Offset of sticky header
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

const InlineCode = props => (
  <code
    className='px-2 py-1 -my-1 rounded-md bg-prism-bg text-prism-base'
    {...props}
  />
);

const MDXComponents = {
  h1: props => (
    <h1 className='mt-5 mb-3 text-3xl font-extrabold leading-snug' {...props} />
  ),
  h2: props => (
    <h2 className='mt-4 mb-3 text-2xl font-bold leading-tight' {...props} />
  ),
  h3: props => <h3 className='mt-3 mb-2 text-xl font-semibold' {...props} />,
  h4: props => <h4 className='my-2 text-lg font-medium' {...props} />,
  inlineCode: InlineCode,
  kbd: InlineCode,
  p: props => <p className='my-4' {...props} />,
  a: CustomLink,
  ul: props => <ul className='my-3 ml-6 list-disc list-outside' {...props} />,
  ol: props => (
    <ol className='my-3 ml-6 list-decimal list-outside' {...props} />
  ),
  li: props => <li className='my-2' {...props} />,
  blockquote: props => (
    <blockquote
      className='relative px-12 py-2 overflow-hidden font-light text-gray-800 bg-gray-300 rounded-md'
      {...props}
    />
  ),
  table: props => (
    <table className='w-full my-4 border-collapse table-auto' {...props} />
  ),
  tr: props => <tr className='border-b last:border-b-0' {...props} />,
  th: props => (
    <th
      className='px-4 py-2 border-b-2 border-r border-gray-400 last:border-r-0'
      {...props}
    />
  ),
  td: props => (
    <th
      className='px-4 py-2 font-light border-r border-gray-400 last:border-r-0'
      {...props}
    />
  ),
};

export default MDXComponents;
