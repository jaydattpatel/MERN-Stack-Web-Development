import { ApplicationError } from "../../error-handler/applicationError.js";
import CommentModel from "./comment.model.js";
import CommentRepository from "./comment.repository.js";

// creating class for handling req urls and response data
export class CommentController {
  constructor() {
    this.commentRepository = new CommentRepository();
  }
  async add(req, res, next) {
    try {
      const userID = req.userID;
      const postID = req.params.postID;
      const comment = req.body.comment;
      const commentModel = new CommentModel(userID, postID, comment);
      console.log("the commentModel is");
      console.log(commentModel);
      const newComment = await this.commentRepository.add(commentModel);
      res.status(201).send(newComment);
    } catch (error) {
      next(error);
    }
  }
  async get(req, res, next) {
    try {
      const postID = req.params.postID;
      const comments = await this.commentRepository.get(postID);
      res.status(201).send(comments);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const comment = req.body.comment;
      const updatedComment = await this.commentRepository.update(
        req.userID,
        id,
        comment
      );
      res.status(201).send(updatedComment);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const id = req.params.id;
      // const comment=req.body.comment;
      await this.commentRepository.delete(req.userID, id);
      res.status(201).send("Comment is deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}
