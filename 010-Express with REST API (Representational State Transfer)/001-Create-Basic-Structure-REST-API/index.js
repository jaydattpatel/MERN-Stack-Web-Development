// author : Jaydatt Patel
import express from 'express';
import productRouter from './src/features/product/product.routes.js';

const server = express();

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", productRouter);


server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});