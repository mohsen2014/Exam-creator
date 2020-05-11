const webpack = require('webpack');

const config = require('./dev.webpack.config');

module.exports = {
  compiledWebpack: webpack(config),
  devServer: {
    publicPath: config.output.publicPath,
    // hot: true,
    // historyApiFallback: true,
    // port: 3000,
    // host: 'localhost',
    stats: {
      colors: true,
      // exclude: [
      //   /.*-dev-server/,
      //   /buildin/,
      //   /hot/,
      // ],
    },
  },
};
