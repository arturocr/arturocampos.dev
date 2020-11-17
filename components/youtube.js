import { useEffect } from 'react';

const YouTube = ({ id, title, ...rest }) => {
  const styleAttr = {
    backgroundImage: `url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')`,
  };
  useEffect(() => {
    import('lite-youtube-embed');
    import('lite-youtube-embed/src/lite-yt-embed.css');
  }, []);
  return (
    <lite-youtube
      class='mx-auto my-6 rounded-lg shadow-lg max-w-video'
      style={styleAttr}
      videoid={id}
      {...rest}
    >
      <button type='button' className='lty-playbtn' title={title}></button>
    </lite-youtube>
  );
};

export default YouTube;
