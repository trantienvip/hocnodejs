const Product = require('../models/Couser');
const { mutipleMongooseToOject } = require('../../util/moongose');

class ProductsController {
  me(req, res, next) {
    Promise.all([Product.find({}), Product.countDocumentsDeleted()])
      .then(([Product, deleteCount]) =>{
        res.render('me/me', {
          title: 'Danh sách sản phẩm | Medical Center',
          Product: mutipleMongooseToOject(Product),
          deleteCount
        });
      })
      .catch(next);

    // Product.countDocumentsDeleted()
    //   .then((deleteCount) =>{
    //     console.log(deleteCount)
    //   })
    //   .catch(() => {});

    // Product.find({})
    //   .then((Product) => {
    //     res.render('me/me', {
    //       title: 'Danh sách sản phẩm | Medical Center',
    //       Product: mutipleMongooseToOject(Product),
    //     });
    //   })
    //   .catch(next);
  }
  trash(req, res, next) {
    Promise.all([Product.findDeleted({}), Product.countDocumentsDeleted()])
      .then(([Product, deleteCount]) =>{
        res.render('me/trash', {
          title: 'Thùng rác | Medical Center',
          Product: mutipleMongooseToOject(Product),
          deleteCount
        });
      })
      .catch(next);

    // Product.findDeleted({})
    //   .then((Product) => {
    //     res.render('me/trash', {
    //       title: 'Thùng rác | Medical Center',
    //       Product: mutipleMongooseToOject(Product),
    //     });
    //   })
    //   .catch(next);
  }
}

module.exports = new ProductsController();
