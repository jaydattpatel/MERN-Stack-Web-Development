import ProductModel from '../models/product.model.js';

class ProductsController {
  getProducts(req, res, next) {
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  getAddProduct(req, res, next) {
    res.render('add-product');
  }

  postAddProduct(req, res, next) {
    // access received form data
    console.log(req.body);
    ProductModel.add(req.body); // add to existing array product
    var products = ProductModel.getAll(); // get all products after update
    res.render('index', { products }); // response to default page
  }
}

export default ProductsController;
