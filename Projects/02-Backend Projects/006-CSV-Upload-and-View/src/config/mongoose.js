import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";

//function to connect  to the database using Mongoose
const connectMongoose = () => {
  mongoose
    .connect(DB_URL, {
      // useNewUrlParser: true
    })
    .then((e) => console.log("Connected to Mongodb : ", DB_URL))
    .catch((e) => console.log("Not Connect Mongodb", DB_URL));
};

export default connectMongoose;
