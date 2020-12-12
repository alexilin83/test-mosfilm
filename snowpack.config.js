module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-webpack',
  ],
  buildOptions: {
    clean: true
  }
};
