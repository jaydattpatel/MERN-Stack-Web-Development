
import express from 'express';
import CommentController from './comment.controller.js';

const commentRoutes = express.Router();

commentRoutes.get('/:postId',CommentController.getPostAllComments);
commentRoutes.post('/:postId',CommentController.createComment);
commentRoutes.delete('/:commentId',CommentController.deleteComment);
commentRoutes.put('/:commentId',CommentController.updateComment);

export default commentRoutes;