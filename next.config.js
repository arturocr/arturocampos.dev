const i18n = require('./i18n/config');

module.exports = {
  async redirects() {
    return [
      {
        source: '/calculadora-deducciones',
        destination: '/es/projects/tax-calculator-crc',
        permanent: true,
      },
    ];
  },
  i18n,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};
