// author : Jaydatt Patel

import express from "express";
import ProductController from "./src/controllers/productController.js";

const app = express();

//make views folder static for accessible files and also css file
app.use(express.static('public'));

const controller = new ProductController();

app.get("/", controller.getProducts);

app.listen(3000,()=>{
    console.log("server is live on 3000........");
});