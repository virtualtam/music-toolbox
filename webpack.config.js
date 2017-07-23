const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WWW',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  };

  return Object.assign(
    {},
    commonConfig,
    config,
  );
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
