// author : Jaydatt Patel
import express from 'express';
import productRouter from './src/features/product/product.routes.js';

const server = express();

server.use(express.json());

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

// localhost:3200/api/products for all requests related to product, redirect to product routes.
server.use("/api/products", productRouter);


server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});