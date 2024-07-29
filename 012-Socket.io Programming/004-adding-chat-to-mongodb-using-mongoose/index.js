//Author : Jaydatt Patel

// https://www.npmjs.com/package/socket.io
// https://socket.io/docs/v4/

import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { connectUsingMongoose } from "./mongooseConfig.js";
import ChatModel from "./ChatDatabase.js";

const app = express();

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

    // send old messages to the clients.
    ChatModel.find()
      .sort({ timestamp: 1 })
      .limit(50)
      .then((messages) => {
        socket.emit("load_messages", messages);
        // console.log(messages);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // add listener when new message sent by client
  socket.on("new_message", async (message) => {
    let userMessage = {
      username: socket.username, // getting variable from socket
      message: message,
    };

    // add chat message in database
    const newChat = new ChatModel({
      username: socket.username,
      message: message,
      timestamp: new Date(),
    });
    newChat.save();

    // broadcast this message to all the clients.
    socket.broadcast.emit("broadcast_message", userMessage);
  });

  socket.on("disconnect", () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000....");
  connectUsingMongoose();
});
