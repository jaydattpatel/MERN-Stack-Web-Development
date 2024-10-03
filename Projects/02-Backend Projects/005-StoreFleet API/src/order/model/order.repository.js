import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
  // Write your code here for placing a new order
  try {
    const order = OrderModel(data);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    throw error;
  }
};

export const getSingleOrderRepo = async (orderId, userId) => {
  try {
    return await OrderModel.find({ _id: orderId, user: userId });
  } catch (error) {
    throw error;
  }
};

export const getMyAllOrdersRepo = async (userId) => {
  try {
    return await OrderModel.find({ user: userId });
  } catch (error) {
    throw error;
  }
};

export const getAllOrdersRepo = async () => {
  try {
    return await OrderModel.find();
  } catch (error) {
    throw error;
  }
};

export const updateOrderRepo = async (orderId, orderStatus) => {
  try {
    const order = await OrderModel.findOne({ _id: orderId });
    order.orderStatus = orderStatus;
    const updatedOrder = await order.save();
    return updatedOrder;
  } catch (error) {
    throw error;
  }
};
