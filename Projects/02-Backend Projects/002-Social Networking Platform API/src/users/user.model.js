
export default class UserModel {
    constructor(name, email, password) {
      this.id = users.length + 1;
      this.name = name;
      this.email = email;
      this.password = password; 
    }
  
    static signUp(name, email, password) {
      const newUser = new UserModel(name,email,password);
      users.push(newUser);
      return newUser;
    }
  
    static signIn(email, password) {
      const user = users.find((u) => u.email == email && u.password == password);
      return user;
    }

  }
  
  let users = [
    {
      id: 1,
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin123',
    },
    {
      id: 2,
      name: 'Seller User',
      email: 'seller@ecom.com',
      password: 'sell123',
    },
    {
      id: 3,
      name: 'Customer User',
      email: 'customer@ecom.com',
      password: 'cust123',
    }
  ];