import LikeModel from "./like.model.js";

export default class LikeController{

    static getLikesOfPost(req,res,next){
        const likes = LikeModel.getLikes(req.params.postId);
        res.status(200).json({likes : likes});
    }
    static toggleLikeOfPost(req,res,next){
        const likes = LikeModel.toggleLikes(req.params.postId, req.payload.userId);
        res.status(200).json({likeToggled : likes});
    }
}