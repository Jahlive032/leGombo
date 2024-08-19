/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    cssnano: require('cssnano')({
      preset: 'default',
    }),
  },
};

export default config;
