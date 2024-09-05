import LikeRepository from "./like.repository.js";

const likeRepo = new LikeRepository();

export class LikeController {
  async likeToggle(req, res, next) {
    try {
      const { collection, Id } = req.params;
      const liked = await likeRepo.likeToggle(req.userID, collection, Id);
      res.status(200).json(liked);
    } catch (err) {
      next(err);
    }
  }

  async getLikes(req, res, next) {
    try {
      const likes = await likeRepo.getLikes(req.userID);
      res.status(200).json(likes);
    } catch (err) {
      next(err);
    }
  }
}
