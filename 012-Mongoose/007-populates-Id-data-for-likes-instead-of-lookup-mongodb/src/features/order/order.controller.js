import OrderRepository from "./order.repository.js";

const orderRepo = new OrderRepository();

export default class OrderController {
  async placeOrder(req, res, next) {
    try {
      const order = await orderRepo.placeOrder(req.userID);
      if (!order) {
        res.status(400).send("Fail to place order...!");
      }
      res.status(201).json(order);
    } catch (err) {
      next(err);
    }
  }
  async getOrder(req, res, next) {
    try {
      const orders = await orderRepo.getOrders(req.userID);
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }
}
