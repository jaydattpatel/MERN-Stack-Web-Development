import "./env.js";
import express from "express";
import http from "http";
import path from "path";

import { Server } from "socket.io";
import cors from "cors";
import Chat from "./chatter.schema.js";
import { connectToDatabase } from "./db.config.js";

// Express app and configure middleware
export const app = express();
app.use(cors());

app.use(express.static(path.resolve("public")));

// HTTP server using Express app
const server = http.createServer(app);

// Initialize Socket.IO server with custom configurations
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res, next) => {
  res.sendFile(path.resolve("index.html"));
});

// Array to store online users
let onlineUser = [];

// Event handling for Socket.IO connections
io.on("connection", (socket) => {
  // console.log("Connection Made ");

  // Event: User joins
  socket.on("join", async (name) => {
    const oldMessage = await Chat.find();
    onlineUser.push({ id: socket.id, name });
    io.emit("onlineUser", onlineUser);
    socket.emit("joined", oldMessage);
  });

  // Event: User typing
  socket.on("typing", () => {
    io.emit("typing", socket.id);
  });

  // Event: User sends a message
  socket.on("sendMessage", async (newMessage) => {
    if (!newMessage.message || !newMessage.name) {
      return;
    }
    const newUser = new Chat({
      name: newMessage.name,
      message: newMessage.message,
      time: new Date(),
    });
    const msg = await newUser.save();
    io.emit("newMessage", { msg, socketId: socket.id });
  });

  // Event: User disconnects
  socket.on("disconnect", () => {
    const indexToRemove = onlineUser.findIndex((user) => user.id == socket.id);
    onlineUser.splice(indexToRemove, 1);
    io.emit("onlineUser", onlineUser);
    // console.log("Connection disconnected.");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port : 3000....");
  // call the connect to database here
  connectToDatabase();
});
