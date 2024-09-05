
// author : Jaydatt Patel
// https://www.npmjs.com/package/jsonwebtoken

import express from 'express';
import cookieParser from 'cookie-parser';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuthorization from './src/middlewares/jwtAuthorization.js';

const server = express();

server.use(express.json());

// set cookie parser
server.use(cookieParser());

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

server.use("/api/products", jwtAuthorization, productRouter);
server.use("/api/users", userRouter);

server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});