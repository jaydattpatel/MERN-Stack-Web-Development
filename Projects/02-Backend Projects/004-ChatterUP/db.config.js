import mongoose from "mongoose";
// Database url added in .env
const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
// Connect to the database
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://${baseUrl}/chatterup`);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
