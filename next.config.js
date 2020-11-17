const i18n = require('./i18n/config');

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};
