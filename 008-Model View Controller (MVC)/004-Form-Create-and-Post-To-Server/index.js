// author : Jaydatt Patel

import express from 'express';
import EJSLayouts from 'express-ejs-layouts';
import path from 'path';
import ProductsController from './src/controllers/product.controller.js';

const app = express();
//make public folder static for accessible files and also css file
app.use(express.static('public'));
// setup view engine settings
app.set("view engine", "ejs");
// set views path of our views folder
app.set("views", path.join(path.resolve(),"src",'views')); 
// add middleware EJSlayout
app.use(EJSLayouts);
// for receive post request data in json
app.use(express.json());
//urlencoded for parse form data to get original information.
app.use(express.urlencoded({ extended: true }));

const controller = new ProductsController();

app.get('/', controller.getProducts);
// set get request for send view page
app.get('/add-product',controller.getAddProduct);
// set post request to receive form data
app.post('/add-product', controller.postAddProduct);

app.listen(3000, () => {
  console.log('Server is running on port 3000........');
});
