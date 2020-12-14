module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ['@snowpack/plugin-webpack', {
      outputPattern: {assets: 'assets/[name].[ext]'}
    }]
  ],
  buildOptions: {
    clean: true,
    baseUrl: './'
  }
};
