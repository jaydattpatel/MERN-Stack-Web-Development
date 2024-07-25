import { ApplicationError } from "../../error-handler/applicationError.js";
import CommentRepository from "../comment/comment.repository.js";
import PostRepository from "../post/post.repository.js";
import LikeRepository from "./like.repository.js";




// creating class for handling req urls and response data 
export class LikeController{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.postRepository=new PostRepository();
        this.commentRepository=new CommentRepository();
    }
    async getLike(req,res){
        try {
            const id=req.params.id; 
            const post=await this.postRepository.getById(id);
            const comment= await this.commentRepository.getComment(id);
            if(post){
               const postLikes= await this.likeRepository.getLikeOnPost(id);
               res.status(201).send(postLikes);
            }else if(comment){
                const commentLikes= await this.likeRepository.getLikeOnComment(id);
                res.status(201).send(commentLikes);
            }else{
                res.status(404).send("no liked post or comment found");
            }
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something with wrong with Like Controller",500); 
        }
    }
    async toggleLike(req,res){
        try {
            const id=req.params.id;
            console.log("this is toggleLike function is called");
            console.log("the userID is ",req.userID);
            // check if id is post or comment 
            const post=await this.postRepository.getById(id);
            const comment= await this.commentRepository.getComment(id);
            if(post){
             await this.likeRepository.likeOnPost(req.userID,id);
             res.status(201).send("Post is liked successfully");
            }else if(comment){
                await this.likeRepository.likeOnComment(req.userID,id);
                res.status(201).send("Comment is liked successfully");
            }else{
                res.status(400).send("You cant like this post or comment");
            }

        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something with wrong with Like Controller",500); 
        }
    }
    async getLikes(){

    }
}