import express from "express";
import LikeController from "./like.controller.js";

const likeRoutes = express.Router();

likeRoutes.get("/:postId", LikeController.getLikesOfPost);
likeRoutes.get("/toggle/:postId", LikeController.toggleLikeOfPost);

export default likeRoutes;
