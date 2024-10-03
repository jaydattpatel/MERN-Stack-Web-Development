import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { ObjectId } from "mongoose";
//creating set to add all signed out tokens to blacklist
export const jwtBlacklist = new Set();
//creating model from schema
const UserModel = mongoose.model("User", userSchema);

// class for doing database operations on user data
export default class UserRepository {
  // handling signup operations
  async signUp(user) {
    try {
      //create instance of model
      const newUser = new UserModel(user);
      // console.log(newUser);

      return await newUser.save(); //save new user

      // set avatar in new user
    } catch (error) {
      console.log(error);
      //errors related to mongoose or database
      if (error instanceof mongoose.Error.ValidationError) {
        throw new ApplicationError(
          "incorrect credential provide valid data",
          400
        );
      } else {
        throw new ApplicationError("Something went wrong with database", 500);
      }
    }
  }
  // handling sign in operation
  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email }); //check if user exists
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
  async getById(userID) {
    try {
      const user = await UserModel.findOne({ _id: userID }).select(
        "-tokens -_id -password -__v"
      ); // user with selected fields
      return user;
    } catch (error) {
      console.log(error); //log error
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
  //return user without selecting fields
  async getByIdToken(userID) {
    try {
      const user = await UserModel.findOne({ _id: userID });
      return user;
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
  //get all users with selecting fields
  async getAll() {
    try {
      const users = await UserModel.find().select(
        "-tokens -_id -password -__v"
      );
      console.log("these are users", users);
      return users;
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
  //updated user
  async update(userID, name, gender, avatar) {
    try {
      const user = await UserModel.findOne({ _id: userID });
      if (name) {
        user.name = name; // name updated
      }
      if (gender) {
        user.gender = gender; // gender updated
      }
      if (avatar) {
        user.avatar = avatar; // avatar updated
      }
      await user.save();
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
  async addTokenInDb(user, token) {
    let oldTokens = user.tokens || []; //check if old tokens or create new array
    if (oldTokens.length) {
      //oldtokens found
      oldTokens = oldTokens.filter((t) => {
        const timeDiffInSec = (Date.now() - parseInt(t.signedAt)) / 1000; //time diff of token
        if (timeDiffInSec < 14400) {
          //14400 seconds or 4 hour
          return t;
        }
      });
    }
    //added back filtered tokens
    await UserModel.findByIdAndUpdate(user._id, {
      tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
    });
  }
  // added new tokens to db
  async addNewTokens(user, newTokens) {
    await UserModel.findByIdAndUpdate(user._id, { tokens: newTokens });
  }

  // Function to add a token to the blacklist
  async addToBlacklist(tokeninfo) {
    console.log("token info is ", tokeninfo);
    return jwtBlacklist.add({
      token: tokeninfo.token,
      signedAt: tokeninfo.signedAt,
    });
  }
  //deleting all tokens from user field
  async deleteAllTokens(userID) {
    try {
      const user = await UserModel.findOne({ _id: userID });
      user.tokens = []; //empty the array
      await user.save();
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong with database ", 500);
    }
  }
}
