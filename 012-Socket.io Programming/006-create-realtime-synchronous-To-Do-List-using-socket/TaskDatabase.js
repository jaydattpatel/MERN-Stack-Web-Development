import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  text: String,

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
