

export default class LikeModel{

    constructor(id, postId, userId){
        this.id = id;
        this.postId = postId;
        this.userId = userId;
    }    
  
    static getLikes(postId) {
      return likes.filter((l) => l.postId == postId);
    }

    static toggleLikes(postId,userId){
        const index = likes.findIndex((l) => (l.postId == postId 
            && l.userId == userId));
        if(index == -1){
            const like = new LikeModel(likes.length+1,postId,userId);
            likes.push(like);
        }else{
            likes.splice(index,1);
        }
        return this.getLikes(postId);
    }
}

let likes = [
    new LikeModel(1,1,1),new LikeModel(7,1,2),new LikeModel(13,1,3),
    new LikeModel(2,2,1),new LikeModel(8,2,2),new LikeModel(14,2,3),
    new LikeModel(3,3,1),new LikeModel(9,3,2),new LikeModel(15,3,3),
    new LikeModel(4,4,1),new LikeModel(10,4,2),new LikeModel(16,4,3),
    new LikeModel(5,5,1),new LikeModel(11,5,2),new LikeModel(17,5,3),
    new LikeModel(6,6,1),new LikeModel(12,6,2),new LikeModel(18,6,3),
];