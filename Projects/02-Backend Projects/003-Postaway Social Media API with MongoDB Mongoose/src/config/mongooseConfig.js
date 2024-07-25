import mongoose from "mongoose";
const url = process.env.DB_URL || "mongodb://0.0.0.0:27017/Postaway";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDb is connected using mongoose");
  } catch (error) {
    console.log("mongoose connection error!!");
    console.log(error);
  }
};
