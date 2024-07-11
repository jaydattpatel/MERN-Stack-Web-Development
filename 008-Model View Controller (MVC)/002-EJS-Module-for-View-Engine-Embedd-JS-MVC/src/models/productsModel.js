import {products} from "../assets/productsData.js";

export default class ProductModel{

    constructor(_id, _name, _desc, _price, _imageUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl
    }
    static get(){
        let productsList = products.map((product)=>{
            return new ProductModel(product.id,product.title,product.description,product.price, product.image);
        });
        return productsList;
    }
}
