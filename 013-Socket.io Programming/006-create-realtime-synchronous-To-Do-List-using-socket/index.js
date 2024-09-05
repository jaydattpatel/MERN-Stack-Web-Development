//Author : Jaydatt Patel

// https://www.npmjs.com/package/socket.io
// https://socket.io/docs/v4/
// https://socket.io/docs/v4/rooms/

import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { connectUsingMongoose } from "./mongooseConfig.js";
import Task from "./TaskDatabase.js";

const app = express();
app.use(cors());

// 1. Creating server using http.
const server = http.createServer(app);

// 2. Create socket server.
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

async function refresh(socket) {
  const tasks = await Task.find().sort({ createdAt: 1 });
  socket.emit("refresh", tasks);
  socket.broadcast.emit("refresh", tasks);
}

// 3. Use socket events.
io.on("connect", (socket) => {
  console.log("Connection is established");

  socket.on("init", async () => {
    const tasks = await Task.find().sort({ createdAt: 1 });
    socket.emit("refresh", tasks);
  });

  socket.on("addTask", async (task) => {
    const newTask = new Task({
      text: task,
    });
    await newTask.save();
    await refresh(socket);
  });

  socket.on("updateTask", async (obj) => {
    const task = await Task.findOne(obj.task);
    task.text = obj.newTx;
    await task.save();
    await refresh(socket);
  });

  socket.on("deleteTask", async (task) => {
    const result = await Task.deleteOne(task);
    await refresh(socket);
  });

  socket.on("disconnect", () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000....");
  connectUsingMongoose();
});
