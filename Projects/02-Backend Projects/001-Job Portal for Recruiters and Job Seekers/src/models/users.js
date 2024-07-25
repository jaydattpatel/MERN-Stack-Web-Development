
export default class Users {

    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    static add(name, email, password) {
      const newUser = new Users(list.length + 1,name,email,password);
      list.push(newUser);
    }
  
    static isValidUser(email, password) {
      const result = list.find(
        (u) => (u.email == email && u.password == password)
      );
      return result;
    }

    static getByEmail(email){
      return list.find(
        (u) => (u.email == email)
      );
    }
}
  
  var list = [
    new Users(1,'Admin','admin@admin.com','12345'),
  ];
  