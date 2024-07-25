import mongoose from "mongoose";


export const userFriendSchema=new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    friendID:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
})