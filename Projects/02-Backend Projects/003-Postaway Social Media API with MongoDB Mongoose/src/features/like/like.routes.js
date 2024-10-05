//manage routes/paths to userController
//import express
import express from "express";

import jwtAuth from "../../middlewares/jwt.middleware.js";
import { LikeController } from "./like.controller.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";

//get router initialize
const likeRouter = express.Router();
const likeController = new LikeController();
likeRouter.post("/toggle/:id", authenticateToken, jwtAuth, (req, res, next) => {
  likeController.toggleLike(req, res, next);
});
likeRouter.get("/:id", authenticateToken, jwtAuth, (req, res, next) => {
  likeController.getLike(req, res, next);
});

export default likeRouter;
