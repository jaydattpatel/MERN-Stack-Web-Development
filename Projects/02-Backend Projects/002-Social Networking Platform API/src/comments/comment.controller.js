import CommentModel from "./comment.model.js";
import { ApplicationError } from "../middlewares/errorHandler.js";

export default class CommentController {
  static getPostAllComments(req, res, next) {
    const comments = CommentModel.getPostCommnents(req.params.postId);
    res.status(200).json({ postComments: comments });
  }

  static createComment(req, res, next) {
    if (!req.body.content) {
      throw new ApplicationError(400, "No inputs found...!");
    }
    const comments = CommentModel.add(
      req.params.postId,
      req.payload.userId,
      req.body.content
    );
    res.status(201).json({ created: comments });
  }

  static deleteComment(req, res, next) {
    const comment = CommentModel.delete(req.params.commentId);
    if (!comment) {
      throw new ApplicationError(404, "No Comment found....!");
    }
    res.status(200).json({ deletedComment: comment });
  }

  static updateComment(req, res, next) {
    if (!req.body.content) {
      throw new ApplicationError(400, "No inputs found...!");
    }
    const comments = CommentModel.update(
      req.params.commentId,
      req.body.content
    );
    if (!comments) {
      throw new ApplicationError(404, "No comment found...!");
    }
    res.status(202).json({ updatedComment: comments });
  }
}
