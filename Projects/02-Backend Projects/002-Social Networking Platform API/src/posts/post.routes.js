import express from "express";
import { uploadFile } from "../middlewares/uploadFile.js";
import PostController from "./post.controller.js";

const postRoutes = express.Router();

postRoutes.get("/all", PostController.getAllPosts);
postRoutes.get("/:id", PostController.getPostById);
postRoutes.get("/", PostController.getUserPosts);
postRoutes.post("/", uploadFile.single("imageUrl"), PostController.createPost);
postRoutes.delete("/:id", PostController.deletePost);
postRoutes.put(
  "/:id",
  uploadFile.single("imageUrl"),
  PostController.updatePost
);

export default postRoutes;
