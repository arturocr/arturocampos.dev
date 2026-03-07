'use client';

import { useEffect } from 'react';

interface VimeoProps {
  id: string;
  [key: string]: unknown;
}

const Vimeo = ({ id, ...rest }: VimeoProps) => {
  useEffect(() => {
    import('lite-vimeo-embed');
  }, []);
  return (
    <lite-vimeo
      videoid={id}
      class='mx-auto my-6 rounded-lg shadow-lg max-w-media'
      {...rest}
    />
  );
};

export default Vimeo;
