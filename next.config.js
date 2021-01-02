const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: {
      urlPattern: /\/surah\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'surah-resources',
      },
    },
  },
});
