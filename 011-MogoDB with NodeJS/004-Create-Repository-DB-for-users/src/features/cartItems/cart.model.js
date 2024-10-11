export default class CartModel {
  constructor(id, productID, userID, quantity) {
    this.id = id;
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
  }

  static add(productID, userID, quantity) {
    const cart = new CartModel(
      cartList.length + 1,
      productID,
      userID,
      quantity
    );
    cartList.push(cart);
    return cart;
  }

  static get(userID) {
    return cartList.filter((i) => i.userID == userID);
  }

  static delete(cartID, userID) {
    const cartIndex = cartList.findIndex(
      (i) => i.id == cartID && i.userID == userID
    );
    if (cartIndex == -1) {
      return "Item not found";
    } else {
      cartList.splice(cartIndex, 1);
    }
  }
}

var cartList = [new CartModel(1, 3, 3, 1), new CartModel(2, 4, 3, 1)];
