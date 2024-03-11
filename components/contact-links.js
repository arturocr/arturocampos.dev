const ContactLinks = () => (
  <ul className='flex flex-wrap justify-center list-none'>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://x.com/arturocr'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5'
          fill='currentColor'
          viewBox='0 0 512 512'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>x.com</title>
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://www.facebook.com/arturo025'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5 stroke-2'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Facebook</title>
          <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://www.linkedin.com/in/arturocr/'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5 stroke-2'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>LinkedIn</title>
          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
          <rect x='2' y='9' width='4' height='12' />
          <circle cx='4' cy='4' r='2' />
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://github.com/arturocr'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5 stroke-2'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>GitHub</title>
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://keybase.io/arturocr'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0.3'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Keybase</title>
          <path d='M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.719 4.115l-.835-.051.053-.835.834.051-.052.835z' />
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='https://t.me/arturocr'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5 stroke-2'
          fill='currentColor'
          stroke='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Telegram</title>
          <path d='m.415 11.196 5.869 2.925c.227.112.495.104.712-.023l5.224-3.037-3.162 2.802c-.161.143-.253.347-.253.562v6.825c0 .72.919 1.023 1.35.451l2.537-3.373 6.274 3.573c.44.253 1.004-.001 1.106-.504l3.913-19.5c.117-.586-.466-1.064-1.008-.846l-22.5 8.775c-.604.236-.643 1.081-.062 1.37zm21.83-8.249-3.439 17.137-5.945-3.386c-.324-.185-.741-.103-.971.201l-1.585 2.107v-4.244l8.551-7.576c.677-.599-.101-1.664-.874-1.21l-11.39 6.622-3.992-1.989z' />
        </svg>
      </a>
    </li>
    <li className='inline-flex mx-1'>
      <a
        className='inline-block p-2 transition-colors text-middle hover:text-secondary'
        href='&#109;&#097;&#105;&#108;&#116;&#111;:&#105;&#110;&#102;&#111;&#064;&#097;&#114;&#116;&#117;&#114;&#111;&#099;&#097;&#109;&#112;&#111;&#115;&#046;&#100;&#101;&#118;'
        rel='noopener noreferrer'
        target='_blank'
      >
        <svg
          className='w-5 stroke-2'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Email</title>
          <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
        </svg>
      </a>
    </li>
  </ul>
);

export default ContactLinks;
