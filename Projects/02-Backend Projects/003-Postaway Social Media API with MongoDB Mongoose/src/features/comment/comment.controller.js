import { ApplicationError } from "../../error-handler/applicationError.js";
import CommentModel from "./comment.model.js";
import CommentRepository from "./comment.repository.js";



// creating class for handling req urls and response data 
export class CommentController{
    constructor(){
        this.commentRepository=new CommentRepository();
    }
    async add(req,res){
        try {
            const userID=req.userID;
            const postID=req.params.postID;
            const comment=req.body.comment;
            const commentModel=new CommentModel(userID,postID,comment);
            console.log("the commentModel is");
            console.log(commentModel);
           const newComment= await this.commentRepository.add(commentModel);
            res.status(201).send(newComment); 
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with adding comment on post ",500)
        }
        
    }
    async get(req,res){
        try {
            const postID=req.params.postID;
           const comments= await this.commentRepository.get(postID);
            res.status(201).send(comments); 
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with adding comment on post ",500)
        } 
    }
    
    async update(req,res){
        try {
            const id=req.params.id; 
            const comment=req.body.comment;
           const updatedComment= await this.commentRepository.update(req.userID,id,comment);
            res.status(201).send(updatedComment);
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with updating comment on post ",500) 
        }
    }
    async delete(req,res){
        try {
            const id=req.params.id; 
            // const comment=req.body.comment;
           await this.commentRepository.delete(req.userID,id);
            res.status(201).send("Comment is deleted successfully");
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with deleting comment on post ",500) 
        }
    }
}