import PostModel from "./post.model.js";
import { ApplicationError } from "../middlewares/errorHandler.js";

export default class PostController{

    static getAllPosts(req,res,next){
      const posts = PostModel.getAll();
      res.status(200).json({AllPost : posts});  
    }

    static getPostById(req,res,next){
        const post = PostModel.get(req.params.id);
        if(!post){
            throw new ApplicationError(404,"Post not Found...!");
        }
        res.status(200).json({post : post});
    }

    static getUserPosts(req,res,next){
        const posts = PostModel.getUserPosts(req.payload.userId)
        res.status(200).json({UserPosts : posts});
    }

    static createPost(req,res,next){

        if(!req.body.caption && !req.file){
            throw new ApplicationError(400,"No inputs found...!");
        }
        let caption;
        let imageUrl;
        if(req.body.caption){
            caption = req.body.caption;
        }
        if(req.file.filename){
            imageUrl = req.file.filename;
        }
        const post = PostModel.add(req.payload.userId,caption,imageUrl);
        res.status(201).json({created : post});
    }

    static deletePost(req,res,next){
        const post = PostModel.delete(req.params.id, req.payload.userId);
        if(!post){
            throw new ApplicationError(404,"Post not found...!")
        }
        res.status(200).json({deleted : post});
        
    }

    static updatePost(req,res,next){
        if(!req.body.caption && !req.file){
            throw new ApplicationError(400,"No inputs found...!");
        }
        if(!req.body.caption){
            req.body.caption = false;
        }
        if(!req.file){
            req.file = {filename : false};
        }
        const post = PostModel.update(req.params.id, req.payload.userId, req.body.caption, req.file.filename);
        if(!post){
            throw new ApplicationError(404,"Post not found...!")
        }
        res.status(202).json({updated : post});
    }
}