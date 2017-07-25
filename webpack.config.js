const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        loader: 'babel-loader?cacheDirectory',
      },
    ],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      title: 'd3v',
      appMountId: 'app',
      inject: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const productionConfig = () => {
  const config = {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
      ],
    },
  };

  return Object.assign(
    {},
    commonConfig,
    config,
  );
};

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
