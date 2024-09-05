// author : Jaydatt Patel

// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://www.npmjs.com/package/express-ejs-layouts

import path from 'path';
import express from "express";
import EJSLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/productController.js";

const app = express();
//make public folder static for accessible files and also css file
app.use(express.static('public'));
// setup view engine settings
app.set("view engine", "ejs");
// set views path of our views folder
app.set("views", path.join(path.resolve(),"src",'views')); 
// add middleware EJSlayout
app.use(EJSLayouts);

const controller = new ProductController();

app.get("/", controller.getProducts);

app.listen(3000,()=>{
    console.log("Server is live on 3000........");
});