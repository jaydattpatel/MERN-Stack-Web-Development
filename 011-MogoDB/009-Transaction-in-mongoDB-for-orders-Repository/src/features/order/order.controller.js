import OrderRepository from "./order.repository.js";

const orderRepo = new OrderRepository();

export default class OrderController {
  async placeOrder(req, res, next) {
    try {
      const userId = req.userID;
      await orderRepo.placeOrder(userId);
      res.status(201).send("Order is created");
    } catch (err) {
      next(err);
    }
  }
}
