import resolveConfig from 'tailwindcss/resolveConfig';
import themeConfig from '../tailwind.config';

const { theme } = resolveConfig(themeConfig);

export default theme;
