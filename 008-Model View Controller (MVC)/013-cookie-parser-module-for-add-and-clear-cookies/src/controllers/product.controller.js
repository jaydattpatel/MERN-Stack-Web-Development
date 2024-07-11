import ProductModel from '../models/product.model.js';

class ProductsController {
  
  getProducts(req, res, next) {
    var products = ProductModel.getAll();
    res.render('index', { products:products, userEmail: req.session.userEmail });
  }

  getAddProduct(req, res, next) {
    res.render('add-product', {errorMessage: null,userEmail: req.session.userEmail});
  }

  postAddProduct(req, res, next) {
    // access received form data
    // console.log(req.body);
  
    const { name, desc, price } = req.body;
    const imageUrl = 'images/' + req.file.filename;
    ProductModel.add(name, desc, price, imageUrl);
    var products = ProductModel.getAll(); // get all products after update
    return res.render('index', { products: products, userEmail: req.session.userEmail }); // response to default page
  }

  getUpdateProductView(req, res, next) {
    // 1. if product exists then return view
    // access URL parameters from req.params
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render('update-product', {product: productFound,errorMessage: null, userEmail: req.session.userEmail});
    }
    // 2. else return errors.
    else {
      res.status(401).send('Product not found.....');
    }
  }

  postUpdateProduct(req, res,next) {
    const {id, name, desc, price } = req.body;
    let imageUrl;
    if(req.file == undefined){
      imageUrl = ProductModel.getById(id).imageUrl;
    }else{
      imageUrl = 'images/' + req.file.filename;
    }
    ProductModel.update(id, name, desc, price, imageUrl);
    var products = ProductModel.getAll();
    res.render('index', { products: products, userEmail: req.session.userEmail });
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send('Product not found');
    }
    ProductModel.delete(id);
    var products = ProductModel.getAll();
    res.render('index', { products: products, userEmail: req.session.userEmail });
  }

  search(req, res) {
    // console.log(req.body);
    const textSearch = req.body.name;
    const data = ProductModel.search(textSearch);
    res.render('search-product',{products:data, userEmail: req.session.userEmail});
  }
}

export default ProductsController;
