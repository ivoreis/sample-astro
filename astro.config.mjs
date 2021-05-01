export default {
  projectRoot: '.',
  astroRoot: './src',
  dist: './dist',
  public: './public',
  extensions: {
    '.jsx': 'react',
    '.tsx': 'react',
    '.vue': 'vue',
    '.svelte': 'svelte'
  },
  snowpack: {
    optimize: {
      bundle: false,
      minify: true,
      target: 'es2018',
    },
  },
};
