// author : Jaydatt Patel
import express from 'express';
import cookieParser from 'cookie-parser';
import swagger from 'swagger-ui-express';

// importing created api document for current project.
import apiDocs from './swagger.json' with { type: 'json' };

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import cartRouter from './src/features/cartItems/cart.routes.js';
import jwtAuthorization from './src/middlewares/jwtAuthorization.js';

const server = express();

// CORS policy configuration
server.use((req, res, next)=>{
    // allow cross origin to access from other address of client host ('*' for all host)
    res.header('Access-Control-Allow-Origin','http://localhost:5500');
    // allow to other host client what headers can pass like authentication..('*' for all headers)
    res.header('Access-Control-Allow-Headers','*');
    // allow to other host what type of request can send request like get,post,delete....('*' for all methods)
    res.header('Access-Control-Allow-Methods','*');
    
    // return ok for preflight request.
    if(req.method=="OPTIONS"){
      return res.sendStatus(200);
    }
    next();
  })
  

server.use(express.json());

// set cookie parser
server.use(cookieParser());

//setup swagger for UI and apiDocument file.
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs))

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.')
});

server.use("/api/products", jwtAuthorization, productRouter);
server.use("/api/cart", jwtAuthorization, cartRouter);
server.use("/api/users", userRouter);

// handle all other undefined request using middleware
server.use((req,res)=>{
    res.status(404).send("API not Found......!\nPlease Check API Documents on http://localhost:3000/api-docs");
}) 

server.listen(3000,()=>{
    console.log('Server listening on port 3000.......');
});