//Author : Jaydatt Patel

// https://www.npmjs.com/package/socket.io
// https://socket.io/docs/v4/

import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

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
io.on("connect", async (socket) => {
  console.log("Connection is established");

  // add event listener to add person name in socket variable when any person join
  socket.on("join", async (data) => {
    socket.username = data;
  });

  // add listener when new message sent by client
  socket.on("new_message", async (message) => {
    let userMessage = {
      username: socket.username, // getting variable from socket
      message: message,
    };

    // broadcast this message to all the clients.
    socket.broadcast.emit("broadcast_message", userMessage);
  });

  socket.on("disconnect", async () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000....");
});
