import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "userID is required"],
  },
  DB: {
    type: String,
    enum: ["users", "products"],
  },
  likableID: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "DB", // refPath to select data from current properties
    required: true,
  },
});

const collection = "likes";

const LikeModel = mongoose.model(collection, LikeSchema);

export default LikeModel;
