// author : Jaydatt Patel
import express from 'express';
import cookieParser from 'cookie-parser';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import cartRouter from './src/features/cartItems/cart.routes.js';
import jwtAuthorization from './src/middlewares/jwtAuthorization.js';

const server = express();

server.use(express.json());

// set cookie parser
server.use(cookieParser());

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

server.use("/api/products", jwtAuthorization, productRouter);
server.use("/api/cart", jwtAuthorization, cartRouter);
server.use("/api/users", userRouter);

server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});