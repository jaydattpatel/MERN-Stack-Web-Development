export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static add(userId, caption, imageUrl) {
    const post = new PostModel(posts.length + 1, userId, caption, imageUrl);
    posts.push(post);
    return post;
  }

  static delete(postId, userId) {
    const index = posts.findIndex((p) => p.id == postId);
    if (index == -1) {
      return false;
    } else {
      const deletedpost = posts.splice(index, 1);
      return deletedpost;
    }
  }

  static update(postId, userId, caption, imageUrl) {
    const index = posts.findIndex((p) => p.id == postId);
    if (index == -1) {
      return false;
    } else {
      if (caption) {
        posts[index].caption = caption;
      }
      if (imageUrl) {
        posts[index].imageUrl = imageUrl;
      }
      return posts[index];
    }
  }

  static getAll() {
    return posts;
  }

  static get(postId) {
    return posts.find((p) => p.id == postId);
  }

  static getUserPosts(userId) {
    return posts.filter((p) => p.userId == userId);
  }
}

let posts = [
  new PostModel(
    1,
    1,
    "apple",
    "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png"
  ),
  new PostModel(
    2,
    2,
    "samsung",
    "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png"
  ),
  new PostModel(
    3,
    2,
    "oneplus",
    "https://w7.pngwing.com/pngs/973/791/png-transparent-oneplus-5t-customer-service-oneplus-3t-others-angle-text-rectangle-thumbnail.png"
  ),
  new PostModel(
    4,
    1,
    "Google",
    "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png"
  ),
  new PostModel(
    5,
    2,
    "apple",
    "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png"
  ),
  new PostModel(
    6,
    1,
    "oneplus",
    "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png"
  ),
];
