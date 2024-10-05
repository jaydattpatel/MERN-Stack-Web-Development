//manage routes/paths to userController
//import express
import express from "express";
import { uploadB } from "../../middlewares/file-upload.middlware.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
import { PostController } from "./post.controller.js";
import authenticateToken from "../../middlewares/checkBlacklistedToken.js";

//get router initialize
const postRouter = express.Router();
const postController = new PostController();

//all the path to controller methods
postRouter.post(
  "/",
  authenticateToken,
  jwtAuth,
  uploadB.single("imageUrl"),
  (req, res, next) => {
    postController.addPost(req, res, next);
  }
);
postRouter.get("/all", authenticateToken, jwtAuth, (req, res, next) => {
  postController.getAllPosts(req, res, next);
});
postRouter.get("/", authenticateToken, jwtAuth, (req, res, next) => {
  postController.getAll(req, res, next);
});
postRouter.get("/:postID", authenticateToken, jwtAuth, (req, res, next) => {
  postController.getById(req, res, next);
});
postRouter.put(
  "/:postID",
  authenticateToken,
  jwtAuth,
  uploadB.single("imageUrl"),
  (req, res, next) => {
    postController.update(req, res, next);
  }
);
postRouter.delete("/:postID", authenticateToken, jwtAuth, (req, res, next) => {
  postController.delete(req, res, next);
});

export default postRouter;
