// author : Jaydatt Patel
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import authorization from './src/middlewares/authorization.js';

const server = express();

server.use(express.json());

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

server.use("/api/products", authorization, productRouter);
server.use("/api/users", userRouter);

server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});