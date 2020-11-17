const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './components/**/*.js',
      './content/**/*.{md,mdx}',
      './pages/**/*.js',
      './posts/**/*.{md,mdx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    'postcss-import',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
