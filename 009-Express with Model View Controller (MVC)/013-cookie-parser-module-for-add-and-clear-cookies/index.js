// author : Jaydatt Patel

// https://www.npmjs.com/package/express-session
// https://www.npmjs.com/package/cookie-parser
// https://www.npmjs.com/package/cookie

import express from 'express';
import EJSLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import ProductsController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js';
import { validateForm } from './src/middlewares/validateForm.js';
import { uploadFile } from './src/middlewares/file-upload-config.js';
import { userValidation } from './src/middlewares/userValidate.js';
import { auth } from './src/middlewares/authorization.js';
import { setLastVisit } from './src/middlewares/lastVisited.js';

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
// set cookie parser
app.use(cookieParser());

// create session key
app.use(session({
  secret:'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie:{secure:false}, //session for http ot https
}));

const controller = new ProductsController();
const usersController = new UserController();

// set get to send register page 
app.get('/register', usersController.getRegister);

//set post to receive register form data
app.post('/register', userValidation, usersController.postRegister);

//set get to send login page
app.get('/login', usersController.getLogin);

//set post to receive login form data
app.post('/login', usersController.postLogin);

// set get to logout request
app.get('/logout', usersController.logout);

// to get all products and set middleware authentication and setLastVisit cookies
app.get('/', auth, setLastVisit, controller.getProducts);

// set get request to send view page
app.get('/add-product', auth, controller.getAddProduct);

//set post to receive form data using middleware validate form and receive uploaded file
//here fieldName is "imageUrl" which is attribute name="imageUrl" in form of html
app.post('/add-product', auth, uploadFile.single('imageUrl'), validateForm, controller.postAddProduct);

// set get request to send view page
app.get('/update-product/:id', auth, controller.getUpdateProductView);

//set post to receive form data using middleware validate form to update product
app.post('/update-product', auth, uploadFile.single('imageUrl'), validateForm, controller.postUpdateProduct);

//set post to receive delete request 
app.post('/delete-product/:id', auth, controller.deleteProduct);

// set post to receive search form data
app.post('/search', auth, controller.search);



app.listen(3000, () => {
  console.log('Server is running on port 3000........');
});
