const Product = require('../models/Couser');
const { MongooseToOject } = require('../../util/moongose');

class ProductsController {
  // Phương thức GET / News/slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((Product) => {
        res.render('product/show', { Product: MongooseToOject(Product) });
      })
      .catch(next);
  }
  create(req, res) {
    res.render('product/create');
  }
  store(req, res, next) {
    const dataForm = req.body;
    dataForm.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const product = new Product(req.body);
    product
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {});
  }
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then((product) =>
        res.render('product/edit', {
          product: MongooseToOject(product),
        }),
      )
      .catch(next);
  }
  // PUT
  update(req, res, next) {
    const dataForm = req.body;
    dataForm.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    Product.updateOne({ _id: req.params.id }, dataForm)
      .then(() => res.redirect('/me'))
      .catch(next);
  }
  // delete
  delete(req, res, next) {
    // Product.deleteOne({ _id: req.params.id }) Xóa cứng
    //Xóa mềm
    Product.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  deleteforce(req, res, next) {
      Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // restore / [PATCH]
  restore(req, res, next) {
    // Product.deleteOne({ _id: req.params.id }) Xóa cứng
    //Xóa mềm
    Product.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new ProductsController();
