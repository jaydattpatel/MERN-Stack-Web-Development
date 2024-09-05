// https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/

import { MongoClient } from "mongodb";

// URL Syntax : mongodb://localhost:27017
//using environment variable
const url = process.env.DB_URL || "mongodb://0.0.0.0:27017";
// If the above url gives error (error may be caused due to IPv4/IPv6 configuration conflict), then try the url "mongodb://127.0.0.1:27017";

let client;

export const connectMongoDB = async () => {
  await MongoClient.connect(url)
    .then((clientObj) => {
      client = clientObj;
      console.log("MongoDB connected Successfully : \n", url);
    })
    .catch((err) => {
      console.log("MongoDB Fail to Connect:\n", url, err);
    });
};

export const getClient = () => {
  return client;
};

// get database obj by connecting specific database.
export const eCommerceDB = (collection) => {
  return client.db("eCommerce").collection(collection);
};
