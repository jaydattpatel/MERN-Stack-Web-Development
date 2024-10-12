// author : Jaydatt Patel

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/features/user/user.routes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { connectMongoDB } from "./src/config/mongodb.js";

const server = express();

server.use(cors());
server.use(express.json());
// set cookie parser
server.use(cookieParser());

server.get("/", (req, res) => {
  res.send("Test API.");
});

server.use("/api/users", userRouter);

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
