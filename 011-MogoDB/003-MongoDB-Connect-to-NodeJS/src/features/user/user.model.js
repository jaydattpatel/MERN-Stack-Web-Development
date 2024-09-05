export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }

  static signUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }

  static getAll() {
    return users;
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
