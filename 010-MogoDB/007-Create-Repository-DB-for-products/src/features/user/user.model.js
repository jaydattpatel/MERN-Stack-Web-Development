export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this._id = id;
  }
}

let users = [
  {
    id: 1,
    name: "Admin",
    email: "admin@admin.com",
    password: "admin123",
    type: "admin",
  },
  {
    id: 2,
    name: "Seller User",
    email: "seller@ecom.com",
    password: "sell123",
    type: "seller",
  },
  {
    id: 3,
    name: "Customer User",
    email: "customer@ecom.com",
    password: "cust123",
    type: "customer",
  },
];
