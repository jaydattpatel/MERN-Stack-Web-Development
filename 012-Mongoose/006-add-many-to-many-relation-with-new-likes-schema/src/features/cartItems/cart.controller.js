import { ApplicationError } from "../../middlewares/errorHandler.js";
import CartRepository from "./cart.repository.js";

const cartRepo = new CartRepository();

export default class CartController {
  async add(req, res, next) {
    try {
      const { productID, quantity } = req.body;
      const cart = await cartRepo.add(productID, req.userID, quantity);
      res.status(201).json(cart);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const userID = req.userID;
      const items = await cartRepo.get(userID);
      return res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const userID = req.userID;
      const cartID = req.params.id;
      const result = await cartRepo.delete(cartID, userID);
      if (!result) {
        return res.status(404).send("Item not found.");
      }
      res.status(200).send("Cart item is removed");
    } catch (err) {
      next(err);
    }
  }
}
