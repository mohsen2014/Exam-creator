const express = require('express');
const WebpackMiddleware = require('webpack-dev-middleware');
const tests = require('./quiz.json');

const { compiledWebpack, devServer } = require('../webpack/dev.server');

const app = express();
app.use(express.json());
app.use(WebpackMiddleware(compiledWebpack, devServer));
app.post('/api', (req, res) => {
  res.type('json').send(tests);
});

app.listen(3000, console.log('app is run on 3000'));
