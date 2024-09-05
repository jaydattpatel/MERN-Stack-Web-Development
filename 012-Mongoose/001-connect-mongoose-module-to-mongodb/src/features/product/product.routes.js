// Manage routes/paths to ProductController

// 1. Import express.
import express from "express";
import ProductController from "./product.controller.js";
import { uploadFile } from "../../middlewares/uploadFile.js";

// 2. Initialize Express router.
const productRouter = express.Router();
const productController = new ProductController();

// localhost:3000/api/products/filter?minPrice=10&maxPrice=20&category=Category-1
productRouter.get("/filter", productController.filterProducts);

// add post request for rate product
productRouter.post("/rate", productController.rateProduct);

// localhost/api/products - all the paths to the controller methods.
productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  uploadFile.single("imageUrl"),
  productController.addProduct
);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
