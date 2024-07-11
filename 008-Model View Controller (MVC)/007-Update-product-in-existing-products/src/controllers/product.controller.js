import ProductModel from '../models/product.model.js';

class ProductsController {
  getProducts(req, res, next) {
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  getAddProduct(req, res, next) {
    res.render('add-product', {errorMessage: null});
  }

  postAddProduct(req, res, next) {
    // access received form data
    // console.log(req.body);

    ProductModel.add(req.body); // add to existing array product
    var products = ProductModel.getAll(); // get all products after update
    return res.render('index', { products }); // response to default page
  }

  getUpdateProductView(req, res, next) {
    // 1. if product exists then return view
    // access URL parameters from req.params
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render('update-product', {product: productFound, errorMessage: null});
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product not found.....');
    }
  }

  postUpdateProduct(req, res) {
    ProductModel.update(req.body);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }
}

export default ProductsController;
