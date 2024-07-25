// author : Jaydatt Patel

//we must import and config environment variable first to access variable in other module during import time.
import "./env.js";

import express from "express";
import cookieParser from "cookie-parser";
import swagger from "swagger-ui-express";
import cors from "cors";

// importing created api document for current project.
import apiDocs from "./swagger.json" with { type: "json" };

import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import cartRouter from "./src/features/cartItems/cart.routes.js";
import orderRouter from "./src/features/order/order.routes.js";
import jwtAuthorization from "./src/middlewares/jwtAuthorization.js";
import logger from "./src/middlewares/logger.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { connectMongoDB } from "./src/config/mongodb.js";

const server = express();

server.use(cors());

server.use(express.json());

// set cookie parser
server.use(cookieParser());

server.use(logger);

//setup swagger for UI and apiDocument file.
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

server.get("/", (req, res) => {
  res.send("Welcome To REST API.");
});

server.use("/api/products", jwtAuthorization, productRouter);
server.use("/api/cart", jwtAuthorization, cartRouter);
server.use("/api/users", userRouter);
server.use('/api/orders', jwtAuthorization, orderRouter);


// adding express errors middleware in last
server.use(errorHandler);

// handle all other undefined request using middleware
server.use((req, res) => {
  res
    .status(404)
    .send(
      "API not Found......! Please Check API Documents on http://localhost:3000/api-docs"
    );
});

server.listen(3000, () => {
  console.log("Server listening on port 3000.......");
  //connect to mongoDB
  connectMongoDB();
});
