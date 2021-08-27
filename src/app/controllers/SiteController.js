const Product = require('../models/Couser');
const { mutipleMongooseToOject } = require('../../util/moongose');

class SiteController {
  index(req, res, next) {
    Product.find({})
      .then((Product) => {
        res.render('home', {
          title: 'Trang chủ | Medical Center',
          Product: mutipleMongooseToOject(Product),
        });
      })
      .catch(next);
  }

  intro(req, res) {
    res.render('intro', { title: 'Giới thiệu | Medical Center' });
  }
  error(req, res) {
    res.render('error', { title: '404 not found | Medical Center' });
  }
}

module.exports = new SiteController();
