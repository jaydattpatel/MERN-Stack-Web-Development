// Author : Jaydatt Patel

import express from "express";
import swagger from 'swagger-ui-express';
import cors from 'cors';

import apiDocs from './swagger.json' with { type: 'json' };

import userRoutes from "./src/users/user.routes.js";
import postRoutes from "./src/posts/post.routes.js";
import commentRoutes from "./src/comments/comment.routes.js";
import likeRoutes from "./src/likes/like.routes.js";
import jwtAuthorization from "./src/middlewares/jwtAuthorization.js";
import logger from "./src/middlewares/logger.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const server = express();

server.use(express.json());

server.use(cors());

server.use(logger);

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

server.get("/", (req,res)=>{
    res.send('Welcome To REST API.');
});

server.use('/api', userRoutes);
server.use('/api/posts',jwtAuthorization, postRoutes);
server.use('/api/comments', jwtAuthorization, commentRoutes);
server.use('/api/likes', jwtAuthorization, likeRoutes);

server.use(errorHandler);

server.use((req,res)=>{
    res.status(404).send("API not Found......! Please Check API Documents on http://localhost:3000/api-docs");

});

server.listen(3000,()=>{
    console.log('Server listening on port 3000......');
});