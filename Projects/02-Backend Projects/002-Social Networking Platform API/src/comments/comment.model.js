export default class CommentModel {
  constructor(id, postId, userId, content) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.content = content;
  }

  static add(postId, userId, content) {
    const newComment = new CommentModel(
      comments.length + 1,
      postId,
      userId,
      content
    );
    comments.push(newComment);
    return newComment;
  }

  static getPostCommnents(postId) {
    return comments.filter((c) => c.postId == postId);
  }

  static delete(id) {
    const index = comments.findIndex((c) => c.id == id);
    if (index == -1) {
      return false;
    }
    const deleted = comments.splice(index, 1);
    return deleted;
  }

  static update(id, content) {
    const index = comments.findIndex((c) => c.id == id);
    if (index == -1) {
      return false;
    }

    comments[index].content = content;
    return comments[index];
  }
}

let comments = [
  new CommentModel(1, 1, 1, "Comment-1"),
  new CommentModel(2, 2, 2, "Comment-2"),
  new CommentModel(3, 3, 3, "Comment-3"),
  new CommentModel(4, 4, 1, "Comment-4"),
  new CommentModel(5, 5, 2, "Comment-5"),
  new CommentModel(6, 6, 3, "Comment-6"),

  new CommentModel(7, 1, 2, "Comment-7"),
  new CommentModel(8, 2, 3, "Comment-8"),
  new CommentModel(9, 3, 1, "Comment-9"),
  new CommentModel(10, 4, 2, "Comment-10"),
  new CommentModel(11, 5, 3, "Comment-11"),
  new CommentModel(12, 6, 1, "Comment-12"),
];
