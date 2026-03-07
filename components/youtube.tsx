'use client';

import { useEffect } from 'react';
import 'lite-youtube-embed/src/lite-yt-embed.css';

interface YouTubeProps {
  id: string;
  title: string;
  [key: string]: unknown;
}

const YouTube = ({ id, title, ...rest }: YouTubeProps) => {
  const styleAttr = {
    backgroundImage: `url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')`,
  };
  useEffect(() => {
    import('lite-youtube-embed');
  }, []);
  return (
    <lite-youtube
      class='mx-auto my-6 rounded-lg shadow-lg max-w-media'
      style={styleAttr}
      videoid={id}
      {...rest}
    >
      <button type='button' className='lty-playbtn' title={title}></button>
    </lite-youtube>
  );
};

export default YouTube;
