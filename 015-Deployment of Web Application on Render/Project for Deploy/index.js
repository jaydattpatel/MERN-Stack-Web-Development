// author : Jaydatt Patel
//we must import and config environment variable first to access variable in other module during import time.
import "./env.js";

import express from "express";
import cors from "cors";
import userRouter from "./src/features/user/user.routes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { connectMongoDB } from "./src/config/mongodb.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile("index.html");
});

server.use("/api/users", userRouter);

// adding express errors middleware in last
server.use(errorHandler);

// handle all other undefined request using middleware
server.use((req, res) => {
  res.status(404).send("API not Found......!");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000.......");
  //connect to mongoDB
  connectMongoDB();
});
