import { ApplicationError } from "../../error-handler/applicationError.js";
import PostModel from "./post.model.js";
import PostRepository from "./post.repository.js";




// creating class for handling req urls and response data 
export class PostController{
    constructor(){
        this.postRepository=new PostRepository(); //initialize repository for calling its funcion
    }
    //adding post to db
   async addPost(req,res){
        const {caption}=req.body; //storing data from req body
        try {
            
            console.log("the req body is");
            console.log(req.body);
            // modelize all data related to post
           const post=new PostModel(req.userID,caption,req.file.filename);
           console.log("new user is",post);
           //called function to add data to db
          const newPost=await this.postRepository.addPost(post);
           res.status(201).send(newPost); // success and sent newPost to client view
        } catch (error) {
            console.log(error); 
            throw new ApplicationError("Something went wrong with post controller",500);
          
        }
    }
    //getting all posts
    async getAllPosts(req,res){
        try {
            //handle operation to get posts
            const posts=await this.postRepository.getAllPosts();
            if(posts){
                return res.status(201).send(posts);// sent successfully all posts to client
            }else{
                return res.status(404).send("Posts not found");  
            }
        } catch (error) {
            console.log(error); 
            throw new ApplicationError("Something went wrong in retrieving posts",500);
          
        } 
    }
    //getting all posts of user
    async getAll(req,res){
        try {
           //handle operation to get posts of user
            const posts=await this.postRepository.getAll(req.userID);
            if(posts){
                return res.status(200).send(posts); //success and sent posts to client
            }else{
                return res.status(404).send("Posts not found");
            }
        } catch (error) {
            console.log(error); 
            throw new ApplicationError("Something went wrong in retrieving posts",500);
          
        }
    }
    //get post by post ID
    async getById(req,res){
        try {
            const postID=req.params.postID; //params data stored
             //handle operation to get post by post iD
            const post=await this.postRepository.getById(postID);
            console.log("getById is calling!",post);
            if(!post){
                return res.status(404).send("Post not found"); //when post not found 
            }else{
                return res.status(200).send(post); //success and sent post to client
            } 
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with getting post by id ",500);
        }
        
    }
    //update post 
    async update(req,res){
        try {
            const postID=req.params.postID;  //store data from req body and params
            const caption=req.body.caption;
            let imageUrl;
            if(req.file){
                imageUrl=req.file.filename; // image file
                   }
                   console.log(caption);
                   //handle operation to update post by post iD
            await this.postRepository.update(postID,caption,imageUrl);
            //getting post by ID to show to the client
            const post=await this.postRepository.getById(postID);
            console.log("update is calling!",post);
            if(!post){
                return res.status(404).send("Post not found");// when there is no post
            }else{
                return res.status(201).send(post); //success and sent post to the client 
            } 
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with getting post by id ",500);
        }
    }
    //delete post by postID
    async delete(req,res){
        try {
            const postID=req.params.postID; // params data
            //handle operation to delete post by post iD
            await this.postRepository.delete(postID);
            res.status(201).send("post is deleted successfully!"); //success
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with delete post by id ",500);
        }
    }
}