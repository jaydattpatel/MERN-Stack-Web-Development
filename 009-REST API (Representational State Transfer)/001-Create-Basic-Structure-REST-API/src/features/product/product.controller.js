import ProductModel from "./productModel.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){

    }

    rateProduct(req,res){

    }

    getOneProduct(req,res){
        
    }

}