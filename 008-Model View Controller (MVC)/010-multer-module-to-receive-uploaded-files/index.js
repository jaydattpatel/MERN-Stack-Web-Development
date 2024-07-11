// author : Jaydatt Patel
// https://www.npmjs.com/package/multer

import express from 'express';
import EJSLayouts from 'express-ejs-layouts';
import path from 'path';
import ProductsController from './src/controllers/product.controller.js';
import { validateForm } from './src/middlewares/validateForm.js';
import { uploadFile } from './src/middlewares/file-upload-config.js';

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

// set get request to send view page
app.get('/add-product',controller.getAddProduct);

//set post to receive form data using middleware validate form and receive uploaded file
//here fieldName is "imageUrl" which is attribute name="imageUrl" in form of html
app.post('/add-product', uploadFile.single('imageUrl'), validateForm, controller.postAddProduct);

// set get request to send view page
app.get('/update-product/:id',controller.getUpdateProductView);

//set post to receive form data using middleware validate form to update product
app.post('/update-product', uploadFile.single('imageUrl'), validateForm, controller.postUpdateProduct);

//set post to receive delete request 
app.post('/delete-product/:id', controller.deleteProduct);

// set post to receive search form data
app.post('/search', controller.search);

app.listen(3000, () => {
  console.log('Server is running on port 3000........');
});
