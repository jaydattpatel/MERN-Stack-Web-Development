import express from "express";
import {
  createNewOrder,
  getSingleOrder,
  getMyAllOrders,
  getAllOrders,
  updateOrder,
} from "../controllers/order.controller.js";
import { auth, authByUserRole } from "../../../middlewares/auth.js";

const router = express.Router();
//post
router.route("/new").post(auth, createNewOrder);

//get
router.route("/:id").get(auth, getSingleOrder);
router.route("/my/orders").get(auth, getMyAllOrders);
router.route("/orders/placed").get(auth, authByUserRole("admin"), getAllOrders);

//put
router.route("/update/:id").put(auth, authByUserRole("admin"), updateOrder);

export default router;
