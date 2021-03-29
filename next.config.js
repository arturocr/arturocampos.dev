const i18n = require('./i18n/config');

module.exports = {
  future: {
    strictPostcssConfiguration: true,
    webpack5: true,
  },
  i18n,
  async redirects() {
    return [
      {
        source: '/calculadora-deducciones',
        destination: '/es/projects/tax-calculator-crc',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};
