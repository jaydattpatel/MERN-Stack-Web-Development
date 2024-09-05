import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  username: String,
  text: String,
  room: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatModel = mongoose.model("GroupChat", chatSchema);

export default ChatModel;
