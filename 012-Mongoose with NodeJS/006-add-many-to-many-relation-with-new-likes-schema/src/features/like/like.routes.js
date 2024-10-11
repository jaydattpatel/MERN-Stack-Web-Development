import express from "express";
import { LikeController } from "./like.controller.js";
// 2. Initialize Express router.
const likeRouter = express.Router();

const likeController = new LikeController();

likeRouter.post("/:collection/:Id", likeController.likeToggle);

likeRouter.get("/", likeController.getLikes);

export default likeRouter;
