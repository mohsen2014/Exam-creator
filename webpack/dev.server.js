const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./dev.webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  port: 80,
  host: '192.168.1.34',
  stats: {
    colors: true,
    exclude: [
      /.*-dev-server/,
      /buildin/,
      /hot/,
    ],
  },
}).listen(80, '192.168.1.34', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
