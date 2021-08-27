const Product = require('../models/Couser');
const { MongooseToOject } = require('../../util/moongose');

class ProductsController {
  // Phương thức GET / News/slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((Product) => {
        res.render('product/show',{Product: MongooseToOject(Product)});
      })
      .catch(next);
  }
}

module.exports = new ProductsController();
