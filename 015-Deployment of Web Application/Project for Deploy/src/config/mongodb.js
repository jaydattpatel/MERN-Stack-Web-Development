// https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/

import { MongoClient } from "mongodb";

const url =
  process.env.DBURL || "mongodb://localhost:27017" || "mongodb://0.0.0.0:27017";

let client;

export const connectMongoDB = async () => {
  await MongoClient.connect(url)
    .then((clientObj) => {
      client = clientObj;
      console.log("MongoDB connected Successfully : ", url);
    })
    .catch((err) => {
      console.log("MongoDB Fail to Connect:\n", err);
    });
};

// get database obj by connecting specific database.
export const eCommerceDB = (collection) => {
  return client.db("eCommerce").collection(collection);
};
