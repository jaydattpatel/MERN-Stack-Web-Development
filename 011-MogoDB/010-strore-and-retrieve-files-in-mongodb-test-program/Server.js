import express from "express";
import { connectMongoDB } from "./src/config/mongodb.js";
import {
  retrieveFileFromDB,
  saveFileInDB,
} from "./src/controller/controller.js";
import { upload } from "./src/middleware/multer.js";

const app = express();
const PORT = 3000;

// Upload route
app.post("/upload", upload.single("file"), saveFileInDB);

// Download route
app.get("/file/:id", retrieveFileFromDB);

// Start the server
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on \nhttp://localhost:${PORT}`);
});
