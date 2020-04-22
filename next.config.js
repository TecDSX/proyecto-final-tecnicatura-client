const withSass = require('@zeit/next-sass');
module.export = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
  },
  webpack(config) {
    return config;
  },
});
