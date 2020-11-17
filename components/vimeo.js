import { useEffect } from 'react';

const Vimeo = ({ id, ...rest }) => {
  useEffect(() => import('lite-vimeo-embed'), []);
  return (
    <lite-vimeo
      videoid={id}
      class='mx-auto my-6 rounded-lg shadow-lg max-w-video'
      {...rest}
    />
  );
};

export default Vimeo;
