export default class CartModel {
  constructor(productID, userID, quantity, id) {
    this._id = id;
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
  }
}
