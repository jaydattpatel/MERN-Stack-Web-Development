import { ApplicationError } from "../../middlewares/errorHandler.js";
import { eCommerceDB } from "../../config/mongodb.js";

class UserRepository {
  collection = "users";

  async signUp(newUser) {
    try {
      const users = eCommerceDB(this.collection);
      await users.insertOne(newUser);
      return newUser;
    } catch (err) {
      console.log(err);
      throw new ApplicationError(500, "Something went wrong with database");
    }
  }

  async signIn(email, password) {
    try {
      const users = eCommerceDB(this.collection);
      return await users.findOne({ email, password });
    } catch (err) {
      console.log(err);
      throw new ApplicationError(500, "Something went wrong with database");
    }
  }
}

export default UserRepository;
