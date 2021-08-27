const newsRouter = require('./news');
const sitesRouter = require('./site');
const product = require('./product');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/product', product);
  app.use('/', sitesRouter);

  // app.get('/', function(req, res) {
  //     res.render('home');
  // });
  // app.get('/intro', function(req, res) {
  //     res.render('intro');
  // });
  // app.get('/search', function(req, res) {
  //     res.render('search');
  // });
  // app.get('/news', function(req, res) {
  //     res.render('news');
  // });
}

module.exports = route;
