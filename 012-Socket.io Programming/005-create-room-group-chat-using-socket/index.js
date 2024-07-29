//Author : Jaydatt Patel

// https://www.npmjs.com/package/socket.io
// https://socket.io/docs/v4/
// https://socket.io/docs/v4/rooms/

import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { connectUsingMongoose } from "./mongooseConfig.js";
import ChatModel from "./ChatDatabase.js";

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

// 3. Use socket events.
io.on("connect", (socket) => {
  console.log("Connection is established");

  // add event listener to add person name in socket variable when any person join
  socket.on("join", async (data) => {
    socket.username = data;

    // Emit a welcome message to the user who joined
    socket.emit("message", { text: `Welcome, ${data.username}!` });

    // Broadcast a message to all other users in the same room
    socket.broadcast.to(data.room).emit("message", {
      text: `${data.username} has joined the room.`,
    });

    // Join the room
    socket.join(data.room);
    // send old messages to the clients.
    ChatModel.find({ room: data.room })
      .sort({ timestamp: 1 })
      .limit(50)
      .then((messages) => {
        socket.emit("previousMessages", messages);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // add listener when new message sent by client
  socket.on("sendMessage", async (data) => {
    // add chat message in database
    const message = new ChatModel({
      username: data.username,
      text: data.message,
      room: data.room,
    });

    await message.save();

    // Broadcast the received message to all users in the same room
    io.to(data.room).emit("message", {
      username: data.username,
      text: data.message,
    });

    // broadcast this message to all the clients.
    // socket.broadcast.emit("broadcast_message", userMessage);
  });

  socket.on("disconnect", () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000....");
  connectUsingMongoose();
});
