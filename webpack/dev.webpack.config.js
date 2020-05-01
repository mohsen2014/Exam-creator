
const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.[hash].js',
    sourceMapFilename: 'debugging/[file].map',
    pathinfo: true,
  },
  mode: 'development',
  cache: true,
  devtool: 'eval',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve('./src/index.js'),
    ],
  },

  stats: {
    colors: true,
    reasons: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {},

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader',
      }, {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
