import mongoose from "mongoose";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { likeSchema } from "./like.schema.js";


const LikeModel=mongoose.model("Like",likeSchema);
// class for doing database operations on post data 
export default class LikeRepository{
    async getLikeOnPost(postID){
        try {
            const existLikes=await LikeModel.find({
             likeable:postID,
             
            }).lean().populate("user",'_id name email');
            console.log("total likes are:-",existLikes.length);
            return existLikes;
        } catch (error) {
            console.log(error);
         throw new ApplicationError("Something with wrong with database",500);  
        }
    }
    async getLikeOnComment(commentID){
        try {
            const existLikes=await LikeModel.find({
             likeable:commentID,
             
            }).lean().populate("user",'_id name email');
            console.log("total likes are:-",existLikes.length);
            return existLikes;
        } catch (error) {
            console.log(error);
         throw new ApplicationError("Something with wrong with database",500);  
        }
    }
   async likeOnPost(userID,postID){
    try {
        const existLike=await LikeModel.findOne({
            user:userID,
         likeable:postID,
         
        })
        if(existLike){
            await LikeModel.findOneAndDelete({
                user:userID,
                likeable:postID,

            });
        }else{
            const newLike=await LikeModel.create({
                user:userID,
                likeable:postID,
                on_model:'Post'
               }) 
               await newLike.save();
        }
       
     } catch (error) {
         console.log(error);
         throw new ApplicationError("Something with wrong with database",500);   
     }
    }
    async likeOnComment(userID,commentID){
        try {
            const existLike=await LikeModel.findOne({
                user:userID,
             likeable:commentID
            })
            if(existLike){
                await LikeModel.findOneAndDelete({
                    user:userID,
                    likeable:commentID
                });
            }else{
            const newLike=await LikeModel.create({
             user:userID,
             likeable:commentID,
             on_model:'Comment'
            }) 
            await newLike.save();
        }
         } catch (error) {
             console.log(error);
             throw new ApplicationError("Something with wrong with database",500);   
         }
    }
}