// Add the module
import express from "express";
import * as controller from "../controllers/controller.js";

const router = express.Router();

//render homepage
router.get("/", controller.homePage);

//upload CSV
router.use("/file/uploads", controller.uploadFile);

//view CSV File in Table format
router.use("/view/:id", controller.displayCSV);

//delete CSV file
router.use("/delete/:id", controller.deleteCSV);

export default router;
