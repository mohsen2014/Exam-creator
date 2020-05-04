const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./dev.webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  port: 3000,
  host: 'localhost',
  stats: {
    colors: true,
    exclude: [
      /.*-dev-server/,
      /buildin/,
      /hot/,
    ],
  },
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
