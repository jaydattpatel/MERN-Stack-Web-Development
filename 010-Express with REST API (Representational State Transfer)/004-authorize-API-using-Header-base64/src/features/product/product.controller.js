import ProductModel from "./productModel.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name,desc,price,category,sizes} = req.body;
        const newProduct = {
            name : name,
            desc : desc,
            price: parseFloat(price),
            imageUrl: req.file.filename,
            category : category,
            sizes: sizes.split(','),
        };
        const createdRecord=ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found....!');
        } else{
            return res.status(200).send(product);
        }
    }

    filterProducts(req, res) {
        // console.log(req.query);
        // req.query to get query parameters
        const {minPrice, maxPrice, category} = req.query;
        const result = ProductModel.filter(minPrice, maxPrice, category);
        res.status(200).send(result);
    }

}