import mongoose from "mongoose";

const ip = process.env.DBURL || "mongodb://0.0.0.0:27017";

const DBURL = ip + `/Postaway`;
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("MongoDB is connected successfully :\n", DBURL);
  } catch (error) {
    console.log("mongoose connection error!!\n", error);
  }
};
