import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
let client;
export let FileDB;
export const connectMongoDB = async () => {
  await MongoClient.connect(url)
    .then((clientObj) => {
      client = clientObj;
      console.log("MongoDB connected Successfully");
    })
    .catch((err) => {
      console.log("MongoDB Fail to Connect:\n", err);
    });
  FileDB = await client.db("FileDB");
};
