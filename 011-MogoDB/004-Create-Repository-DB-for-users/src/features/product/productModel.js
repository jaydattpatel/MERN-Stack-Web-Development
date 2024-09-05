import UserModel from "../user/user.model.js";

export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static getAll() {
    return products;
  }

  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }

  static get(id) {
    return products.find((p) => p.id == id);
  }

  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }

  static rateProduct(userID, productID, rating) {
    const user = UserModel.getAll().find((u) => u.id == userID);
    if (!user) {
      return "User not found";
    }

    const product = products.find((p) => p.id == productID);
    if (!product) {
      return "Product not found";
    }

    // Check if there are any ratings and if not then add ratings array.
    if (!product.ratings) {
      product.ratings = [];
      product.ratings.push({ userID: userID, rating: rating });
    } else {
      // Check if user rating is already available.
      const existingRatingIndex = product.ratings.findIndex(
        (r) => r.userID == userID
      );
      if (existingRatingIndex >= 0) {
        product.ratings[existingRatingIndex] = {
          userID: userID,
          rating: rating,
        };
      } else {
        // if no exisitng rating, then add new rating.
        product.ratings.push({ userID: userID, rating: rating });
      }
    }
  }
}

var products = [
  new ProductModel(
    1,
    "apple",
    "Product Description 1",
    12.65,
    "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
    "Category-1",
    ["M", "L", "XL", "XXL"]
  ),
  new ProductModel(
    2,
    "samsung",
    "Product Description 2",
    13.45,
    "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
    "Category-2",
    ["M", "L"]
  ),
  new ProductModel(
    3,
    "oneplus",
    "Product Description 3",
    11.89,
    "https://w7.pngwing.com/pngs/973/791/png-transparent-oneplus-5t-customer-service-oneplus-3t-others-angle-text-rectangle-thumbnail.png",
    "Category-3",
    ["XL", "XXL"]
  ),
  new ProductModel(
    4,
    "Google",
    "Product Description 4",
    15.55,
    "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    "Category-4",
    ["M", "XXL"]
  ),
  new ProductModel(
    5,
    "apple",
    "Product Description 5",
    14.95,
    "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
    "Category-5",
    ["L", "XL"]
  ),
  new ProductModel(
    6,
    "oneplus",
    "Product Description 6",
    13.78,
    "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
    "Category-6",
    ["M", "XL"]
  ),
];
