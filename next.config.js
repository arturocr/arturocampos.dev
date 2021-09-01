module.exports = {
  experimental: {
    esmExternals: true,
  },
  future: {
    strictPostcssConfiguration: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  async redirects() {
    return [
      {
        source: '/calculadora-deducciones',
        destination: '/es/projects/tax-calculator-crc',
        permanent: true,
      },
      {
        source: '/calculadora',
        destination: '/es/projects/tax-calculator-crc',
        permanent: true,
      },
    ];
  }
};
