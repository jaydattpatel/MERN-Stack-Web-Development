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
io.on("connect", (socket) => {
  console.log("Connection is established");

  socket.on("new_message", (message) => {
    // print message
    console.log(message);
    // broadcast this message to all the clients.
    socket.broadcast.emit("broadcast_message", message);
  });

  socket.on("disconnect", () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000....");
});
