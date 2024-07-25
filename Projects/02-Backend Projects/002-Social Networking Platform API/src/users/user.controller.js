import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';
import { ApplicationError } from "../middlewares/errorHandler.js";

export default class UserController{
    static signup(req,res,next){
        const {name,email,password} = req.body;
        if(!email || !password){
            throw new ApplicationError(400,'Inputs not found...!');
        }

        const user = UserModel.signUp(name,email,password);
        res.status(201).send("User Created.");
    }

    static signin(req,res,next){

        const result = UserModel.signIn(req.body.email,req.body.password);
        if (!result) {
            throw new ApplicationError(401,'Incorrect Credentials...!');
        } 
    
        // syntax: jwt.sign(payload, secretKey, [options, callback])
        const payload = {userId : result.id, email: result.email};
        const privateKey = 'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz';
        const options = {expiresIn: '10h'}; //60 means 60ms, "2 days", "10h", "7d"
        const token = jwt.sign(payload,privateKey,options);
        res.status(200).send(token);
    }
}