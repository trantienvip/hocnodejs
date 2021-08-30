const newsRouter = require('./news');
const sitesRouter = require('./site');
const product = require('./product');
const me = require('./me');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/product', product);
  app.use('/me', me);
  app.use('/', sitesRouter);
}

module.exports = route;
