import mongoose from "mongoose";
//created commentSchema and exported
export const commentSchema=new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    postID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required:true
    },
    comment:{type:String,
    required:true
    }
});