
// author : Jaydatt Patel
// https://www.npmjs.com/package/cors

import express from 'express';
import cookieParser from 'cookie-parser';
import swagger from 'swagger-ui-express';
import cors from 'cors';

// importing created api document for current project.
import apiDocs from './swagger.json' with { type: 'json' };

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import cartRouter from './src/features/cartItems/cart.routes.js';
import jwtAuthorization from './src/middlewares/jwtAuthorization.js';

const server = express();

// CORS policy configuration
var corsOptions = {
  // origin: Configures the Access-Control-Allow-Origin CORS header. By default all allowed '*'.  For Single server as string and for multiple as array like ["http://localhost:5500", "http://localhost:4400"]
  origin: "http://localhost:5500",
  // allowedHeaders: Configures the Access-Control-Allow-Headers CORS header. By default all allowed '*'. Expects a comma-delimited string (ex: 'Content-Type,Authorization') or an array (ex: ['Content-Type', 'Authorization']).
  allowedHeaders: '*',
  // methods: Configures the Access-Control-Allow-Methods CORS header. By default all allowed '*'. Expects a comma-delimited string (ex: 'GET,PUT,POST') or an array (ex: ['GET', 'PUT', 'POST'])
  methods: '*'
  // exposedHeaders: Configures the Access-Control-Expose-Headers CORS header. Expects a comma-delimited string (ex: 'Content-Range,X-Content-Range') or an array (ex: ['Content-Range', 'X-Content-Range']). If not specified, no custom headers are exposed.

  // credentials: Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.
}
server.use(cors(corsOptions));

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