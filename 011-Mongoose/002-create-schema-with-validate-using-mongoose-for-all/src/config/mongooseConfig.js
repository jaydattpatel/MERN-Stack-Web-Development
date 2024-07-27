// https://mongoosejs.com/docs/index.html
import mongoose from "mongoose";

// URL Syntax : mongodb://localhost:27017
//using environment variable
const url = process.env.DB_URL || "mongodb://0.0.0.0:27017";
// If the above url gives error (error may be caused due to IPv4/IPv6 configuration conflict), then try the url "mongodb://127.0.0.1:27017";

const DBURL = url + "/" + "eCommerce";

export const connectUsingMongoose = async () => {
  console.log("Connecting to mongodb.....");
  await mongoose
    .connect(DBURL)
    .then(() => {
      console.log(`Mongoose connected to mongodb Successfully : \n${DBURL}\n`);
    })
    .catch((err) => {
      console.log(`Mongoose Fail to connect with mongodb:\n${DBURL}\n`);
      throw Error(err);
    });
};
