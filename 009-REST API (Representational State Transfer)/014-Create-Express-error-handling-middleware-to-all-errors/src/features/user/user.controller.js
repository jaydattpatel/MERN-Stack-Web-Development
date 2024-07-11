import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';
import { ApplicationError } from '../../middlewares/errorHandler.js';

export default class UserController {
  signUp(req, res) {
    const {name,email,password,type} = req.body;
    const user = UserModel.signUp(name,email,password,type);
    res.status(201).send(user);
  }

  signIn(req, res, next) {
    // you can directly throw error without try catch block and without passing error in next function. So thrown object error will be passed next middleware in parameters.
      try{
        const result = UserModel.signIn(req.body.email,req.body.password);
        if (!result) {
          // return res.status(400).send('Incorrect Credentials...!');
          throw new ApplicationError(400,'Incorrect Credentials...!');
        } else {

          // syntax: jwt.sign(payload, secretKey, [options, callback])
          const payload = {userId : result.id, email: result.email};
          const privateKey = 'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz';
          const options = {expiresIn: '10h'}; //60 means 60ms, "2 days", "10h", "7d"

          const token = jwt.sign(payload,privateKey,options);
          // add token in cookie
          res.cookie('jwtToken',token);

          return res.status(200).send(token);
        }
      }catch(err){
        console.log("Passing error to middleware...");
        next(err);
      }
  }

}
