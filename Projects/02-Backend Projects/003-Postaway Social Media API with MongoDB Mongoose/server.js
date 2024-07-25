// Author : Jaydatt Patel

import "./env.js";
//import express
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";
import mongoose from "mongoose";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";

import apiDocs from "./swagger.json" with { type: "json" };
//importing all routes
import userRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/post/post.routes.js";
import commentRouter from "./src/features/comment/comment.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
import friendShipRouter from "./src/features/frndship/frndship.routes.js";
import otpRouter from "./src/features/otp/otp.routes.js";
//create server
const server = express();
const port = 4200;
// //CORS policy configuration
// var corsOptions = {
//   origin: `http://localhost:5500`,
// };
server.use(cors());

server.use(express.json());
//  swagger open api for testing api
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
//   use loggermiddleware
server.use(loggerMiddleware);

//for all requests related to user,redirect to user routes
server.use("/api/users", userRouter);
//for all requests related to post,redirect to post routes
server.use("/api/posts", postRouter);
//for all requests related to comment on post,redirect to post routes
server.use("/api/comments", commentRouter);
//for all requests related to like on post,redirect to post routes
server.use("/api/likes", likeRouter);
//for all requests related to friendship,redirect to post routes
server.use("/api/friends", friendShipRouter);
//for all requests related to otp,redirect to post routes
server.use("/api/otp", otpRouter);
//default request handler
server.get("/", (req, res) => {
  res.send("welcome to Social Media API");
});
//Error handler Middleware
server.use((err, req, res, next) => {
  console.log(err);
  // err is of mongoose
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send(err.message);
  }
  // err is of application
  if (err instanceof ApplicationError) {
    return res.status(err.code).send(err.message);
  } else {
    //server error
    res.status(500).send("Something went wrong,please try later");
  }
});
//middleware to handle 404 requests
server.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found please check our documentation for more at localhost:4200/api-docs"
    );
});
//specific port
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  //connection to mongoDB
  connectUsingMongoose();
});
