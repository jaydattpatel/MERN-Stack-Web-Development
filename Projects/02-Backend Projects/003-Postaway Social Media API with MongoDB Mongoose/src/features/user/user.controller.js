import { ApplicationError } from "../../error-handler/applicationError.js";
import jwt from "jsonwebtoken";
import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

// creating class for handling req urls and response data
export class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  // controller for sign up
  async signUpController(req, res, next) {
    const { name, email, password, gender } = req.body; //storing values of req.body
    try {
      //hash password
      console.log(req.body);
      const hashPassword = await bcrypt.hash(password, 10); //bcrypt for hasing password
      //modelize req body data in user
      const user = new UserModel(
        name,
        email,
        hashPassword,
        gender,
        req.file?.filename
      );
      console.log("new user is", user);
      const newUser = await this.userRepository.signUp(user); // new user created
      res.status(201).send(newUser); //success and sent new user to client
    } catch (error) {
      // catched error and throw error
      next(error);
    }
  }
  // controller for sign in
  async signInController(req, res, next) {
    console.log(req.body.email, req.body.password); // email and password took from req body
    try {
      //check with email if user exist
      const user = await this.userRepository.findByEmail(req.body.email);
      console.log("Existing user is", user);
      if (!user) {
        res.status(400).send("Incorrect credentials"); // when there is no user
      } else {
        // compare password with hashed password
        const result = await bcrypt.compare(req.body.password, user.password);
        console.log("result is ", result);
        if (result) {
          // create token
          const token = jwt.sign(
            {
              userID: user._id,
              email: user.email,
            },
            process.env.JWT_SECRET, //provide secret key
            {
              expiresIn: "4h", //token will expire in 4 hr
            }
          );
          // adding token to db
          await this.userRepository.addTokenInDb(user, token);
          return res.status(200).send(token); // success and sent token for accepting all req
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (error) {
      next(error);
    }
  }
  // controller for sign out
  async signOutController(req, res, next) {
    // taking token from req header
    const token = req.headers["authorization"];
    console.log(token);
    // when no token sent unauthorized
    if (!token) {
      return res.status(400).send("Unauthorized user or sign in for sign out");
    } else {
      //get user info
      const user = await this.userRepository.getByIdToken(req.userID);

      if (user) {
        const tokens = user.tokens;
        console.log(tokens);
        //loop on user's tokens array
        for (let i = 0; i < tokens.length; i++) {
          if (tokens[i].token == token) {
            // token matches
            console.log("from signout controller", tokens[i]);
            // add token to blacklist function called
            const addedBlack = await this.userRepository.addToBlacklist(
              tokens[i]
            );
            console.log("from signout controller addedBlack", addedBlack);
          }
        }
        //store all tokens which not matched with current token
        const newTokens = tokens.filter((t) => t.token !== token);
        console.log(newTokens);
        // remaining tokens added back to user's toekn array
        await this.userRepository.addNewTokens(user, newTokens);
      }

      return res.status(201).send("signed Out Successfully!!"); //success
    }
  }
  async signOutFromAllDevice(req, res, next) {
    const user = await this.userRepository.getByIdToken(req.userID);

    console.log(user);
    if (user) {
      const tokens = user.tokens;
      let i = 0;
      for (; i < tokens.length; i++) {
        console.log(tokens[i]);
        const black = await this.userRepository.addToBlacklist(tokens[i]);
        console.log("blacklist", black);
      }
      if (i == tokens.length) {
        await this.userRepository.deleteAllTokens(req.userID);
      }
      return res.status(201).send("signed out from all devices");
    } else {
      return res.status(404).send("failed signed out from all devices");
    }
  }

  async getById(req, res, next) {
    try {
      const userID = req.params.userID;
      console.log("swager userID", userID);
      const user = await this.userRepository.getById(userID);
      console.log("getById is calling!", user);
      if (!user) {
        return res.status(404).send("User not found");
      } else {
        return res.status(201).send(user);
      }
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const users = await this.userRepository.getAll();
      if (users) {
        return res.status(201).send(users);
      } else {
        return res.status(404).send("Users not found");
      }
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const userID = req.userID;
      const name = req.body.name;
      const gender = req.body.gender;
      let avatar;
      // console.log(req.body.avatar);
      if (req.file) {
        avatar = req.file.filename;
      } else {
        avatar = "Image not updated";
      }

      await this.userRepository.update(userID, name, gender, avatar);
      const updatedUser = await this.userRepository.getById(userID);
      res.status(201).send(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
