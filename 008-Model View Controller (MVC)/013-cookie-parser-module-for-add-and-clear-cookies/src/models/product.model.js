export default class ProductModel {
  constructor(id, name, desc, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  static getAll() {
    return products;
  }

  static add(name, desc, price,imageUrl) {
    let newProduct = new ProductModel(products.length + 1, name, desc, price, imageUrl);
    products.push(newProduct);
    // console.log(newProduct);
  }

  static getById(id) {
    return products.find((p) => p.id == id);
  }

  static update(id,name, desc, price,imageUrl) {
    // matching with id
    const index = products.findIndex((p) => p.id == id);
    // update product in existing list
    products[index] = new ProductModel(id, name, desc, price, imageUrl); 
  }

  static delete(id) {
    const index = products.findIndex((p) => p.id == id);
    products.splice(index, 1);
  }

  static search(name){
    const data = products.filter((product) => {
      if (product.name == name) {
        return product;
      }
    });
    return data;
  }

}

var products = [
  new ProductModel (
    1,
    "apple",
    "Product Description 1",
    12.65,
    "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
  ),
  new ProductModel(
    2,
    "samsung",
    "Product Description 2",
    13.45,
    "https://w7.pngwing.com/pngs/176/171/png-transparent-samsung-galaxy-gurugram-faridabad-logo-samsung-blue-text-logo.png",
  ),
  new ProductModel(
    3,
    "oneplus",
    "Product Description 3",
    11.89,
    "https://w7.pngwing.com/pngs/973/791/png-transparent-oneplus-5t-customer-service-oneplus-3t-others-angle-text-rectangle-thumbnail.png",
  ),
  new ProductModel(
    4,
    "Google",
    "Product Description 4",
    15.55,
    "https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
  ),
  new ProductModel(
    5,
    "apple",
    "Product Description 5",
    14.95,
    "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
  ),
  new ProductModel(
    6,
    "oneplus",
    "Product Description 6",
    13.78,
    "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
  )
];
