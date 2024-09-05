import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Name must 3 to 30 chars\n"],
    maxLength: [30, "Name must 3 to 30 chars\n"],
    uppercase: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    minLength: [3, "Description must 3 to 200 chars\n"],
    maxLength: [200, "Description must 3 to 200 chars\n"],
    lowercase: true,
    trim: true,
    default: "no description",
  },
  price: {
    type: Number,
    min: [1, "Price must not be zero or negative.\n"],
    required: true,
  },
  stock: {
    type: Number,
    min: [0, "Stock must be zero or Positive.\n"],
    default: 0,
  },
  imageUrl: { type: String, trim: true },
  category: [
    {
      type: String,
      lowercase: true,
      trim: true,
      enum: {
        values: ["cat-1", "cat-2", "cat-3", "other"],
        message: `Invalid Category\n`,
      },
      default: "other",
    },
  ],
  sizes: [],
  ratings: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId, //set type ObjectId
        ref: "users", //set collection name
      },
      rate: {
        type: Number,
        min: [0, "rate must 0 to 5\n"],
        max: [5, "rate must 0 to 5\n"],
      },
    },
  ],
});

const collection = "products";

const ProductModel = mongoose.model(collection, ProductSchema);

export default ProductModel;

var products = [
  {
    name: "apple",
    description: "Product Description 1",
    price: 12.65,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
    category: "cat-1",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    name: "samsung",
    description: "Product Description 2",
    price: 13.45,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
    category: "cat-2",
    sizes: ["M", "L"],
  },
  {
    name: "oneplus",
    description: "Product Description 3",
    price: 11.89,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/973/791/png-transparent-oneplus-5t-customer-service-oneplus-3t-others-angle-text-rectangle-thumbnail.png",
    category: "cat-3",
    sizes: ["XL", "XXL"],
  },
  {
    name: "Google",
    description: "Product Description 4",
    price: 15.55,
    stock: 20,
    imageUrl:
      "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    category: "other",
    sizes: ["M", "XXL"],
  },
  {
    name: "apple",
    description: "Product Description 5",
    price: 14.95,
    stock: 20,
    imageUrl:
      "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
    category: "cat-3",
    sizes: ["L", "XL"],
  },
  {
    name: "oneplus",
    description: "Product Description 6",
    price: 13.78,
    stock: 20,
    imageUrl:
      "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
    category: "cat-2",
    sizes: ["M", "XL"],
  },
];
