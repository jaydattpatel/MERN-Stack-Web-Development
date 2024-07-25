import mongoose from "mongoose";


export const friendRequestSchema=new mongoose.Schema({
    friendID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    friendReqID:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
})