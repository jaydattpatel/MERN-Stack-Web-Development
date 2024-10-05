//manage routes/paths to userController
//import express
import express from "express";
import { CommentController } from "./comment.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";

//get router initialize
const commentRouter = express.Router();
const commentController = new CommentController();

//all the path to controller methods
commentRouter.post("/:postID", authenticateToken, jwtAuth, (req, res, next) => {
  commentController.add(req, res, next);
});
commentRouter.get("/:postID", authenticateToken, jwtAuth, (req, res, next) => {
  commentController.get(req, res, next);
});
commentRouter.put("/:id", authenticateToken, jwtAuth, (req, res, next) => {
  commentController.update(req, res, next);
});
commentRouter.delete("/:id", authenticateToken, jwtAuth, (req, res, next) => {
  commentController.delete(req, res, next);
});

export default commentRouter;
