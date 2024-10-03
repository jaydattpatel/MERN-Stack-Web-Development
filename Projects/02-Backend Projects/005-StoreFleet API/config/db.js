import mongoose from "mongoose";
// Database url added in .env
const ip =
  process.env.DBURL || `mongodb://0.0.0.0:27017` || `mongodb://localhost:27017`;

const DBURL = ip + `/storefleet`;

export const connectDB = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("MongoDB connected Successfully : \n", DBURL);
  } catch (err) {
    console.log(err);
  }
};
