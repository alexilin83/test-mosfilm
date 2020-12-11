/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-webpack',
    [
      'snowpack-plugin-imagemin',
      {
        /* see "Plugin Options" below */
        include: ['**/*.jpg', '**/*.png'],
        plugins: [
          require('imagemin-mozjpeg')({quality: 90, progressive: true}),
          require('imagemin-optipng')({optimizationLevel: 7}),
        ],
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: './',
    clean: true
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
