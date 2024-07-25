import mongoose from "mongoose";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { postSchema } from "../post/post.schema.js";
import { commentSchema } from "./comment.schema.js";



//creating model from schema
const CommentModel=mongoose.model('Comment',commentSchema);
// class for doing database operations on post data 
export default class CommentRepository{
async add(comntModl){
    console.log("comment repo is calling");
try {
    // const existComment=await CommentModel.findOne({
    //     postID:comntModl.postID
    // })
    // if(existComment){
    //     let comments=existComment.comment;
    //     if(comments.length){
    //         existComment.comment.push(comntModl.comment);
    //         return await existComment.save();
    //     }
    // }else{
        const newComment=await CommentModel.create({
            userID:comntModl.userID,
            postID:comntModl.postID,
            comment:comntModl.comment
        });
            console.log(newComment);
            
          return  await newComment.save();
    
    
} catch (error) {
    console.log(error);
    throw new ApplicationError("Something went wrong with database",500);
}
}
async get(postID){
    try {
        const comments=await CommentModel.find({
            postID:postID
        }).lean().populate("userID",'_id name email');
        console.log("these are comments",comments);
        return comments;
    } catch (error) {
        console.log(error);
    throw new ApplicationError("Something went wrong with database",500);
    }
}
async getComment(id){
    try {
        const comment=await CommentModel.findOne({
            _id:id
        }).lean().populate("userID",'_id name email');
        console.log("this is comment",comment);
        return comment;
    } catch (error) {
        console.log(error);
    throw new ApplicationError("Something went wrong with database",500);
    }
}
async update(userID,commentID,comment){
    try {
        const commentField=await CommentModel.findOne({
            _id:commentID,userID:userID
        });
        console.log(commentField);
        commentField.comment=comment;
       return await commentField.save();
    } catch (error) {
        console.log(error);
        throw new ApplicationError("Something went wrong with database",500);
    }
}
async delete(userID,commentID){
    try {
       await CommentModel.findOneAndDelete({
            _id:commentID,userID:userID
        });
        
        // commentField.comment=comment;
       
    } catch (error) {
        console.log(error);
        throw new ApplicationError("Something went wrong with database",500);
    }
}
}