import { ApplicationError } from "../../middlewares/errorHandler.js";
import ProductRepository from "./product.repository.js";

const productRepo = new ProductRepository();

export default class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const products = await productRepo.getAll();
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }

  async addProduct(req, res, next) {
    try {
      const { name, description, price, stock, category, sizes } = req.body;
      const product = {
        name: name,
        description: description,
        price: parseFloat(price),
        stock: parseInt(stock),
        imageUrl: req.file?.filename,
        category: category,
        sizes: sizes,
      };
      const prod = await productRepo.add(product);
      res.status(201).json(prod);
    } catch (err) {
      next(err);
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const id = req.params.id;
      const product = await productRepo.getById(id);
      if (!product) {
        throw new ApplicationError(404, "Product not found....!");
      }
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }

  async filterProducts(req, res, next) {
    try {
      // console.log(req.query);
      const { minPrice, maxPrice, category } = req.query;
      const result = await productRepo.filter(minPrice, maxPrice, category);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  async rateProduct(req, res, next) {
    try {
      const { productId, rate } = req.body;
      if (!productId || rate < 0 || rate > 5) {
        throw new ApplicationError(
          400,
          "productId must be 24 chars or rate must be in range 0 to 5 !"
        );
      }
      const error = await productRepo.rateProduct(req.userID, productId, rate);
      // console.log(error);
      if (error) {
        throw new ApplicationError(400, error);
      }
      return res.status(200).send("Rating has been added");
    } catch (err) {
      next(err);
    }
  }
}
