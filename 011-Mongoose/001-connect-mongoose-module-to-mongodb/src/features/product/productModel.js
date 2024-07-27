export default class ProductModel {
  constructor(name, desc, price, stock, imageUrl, category, sizes, id) {
    this._id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.stock = stock;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }
}

var products = [
  {
    name: "apple",
    desc: "Product Description 1",
    price: 12.65,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
    category: "Category-1",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    name: "samsung",
    desc: "Product Description 2",
    price: 13.45,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
    category: "Category-2",
    sizes: ["M", "L"],
  },
  {
    name: "oneplus",
    desc: "Product Description 3",
    price: 11.89,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/973/791/png-transparent-oneplus-5t-customer-service-oneplus-3t-others-angle-text-rectangle-thumbnail.png",
    category: "Category-3",
    sizes: ["XL", "XXL"],
  },
  {
    name: "Google",
    desc: "Product Description 4",
    price: 15.55,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    category: "Category-4",
    sizes: ["M", "XXL"],
  },
  {
    name: "apple",
    desc: "Product Description 5",
    price: 14.95,
    stock: 20,
    imageUrl:
      "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
    category: "Category-5",
    sizes: ["L", "XL"],
  },
  {
    name: "oneplus",
    desc: "Product Description 6",
    price: 13.78,
    stock: 20,
    imageUrl:
      "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
    category: "Category-6",
    sizes: ["M", "XL"],
  },
];
