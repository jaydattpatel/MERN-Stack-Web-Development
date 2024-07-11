
import ProductModel from '../models/productsModel.js';

export default class ProductController{

    getProducts(req,res){
        let products = ProductModel.get();
        // console.log(products);
        // sending response by rendering HTML content in .ejs file
        // here file is .ejs file and productInHTML is variable in .ejs
        res.render("productsFile",{productsInHTML : products});
    }
}