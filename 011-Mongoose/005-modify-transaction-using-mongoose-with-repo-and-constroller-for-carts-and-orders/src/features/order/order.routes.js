import express from "express";
import OrderController from "./order.controller.js";

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get("/", orderController.getOrder);
orderRouter.post("/", orderController.placeOrder);

export default orderRouter;
