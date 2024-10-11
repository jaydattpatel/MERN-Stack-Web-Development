export default class OrderModel {
  constructor(userId, totalAmount, timestamp) {
    this.userId = userId;
    this.totalAmount = totalAmount;
    this.timestamp = timestamp;
  }
}
