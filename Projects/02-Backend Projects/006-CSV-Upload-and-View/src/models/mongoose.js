// Add the module
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const CSV_PATH = path.join(path.resolve(), "uploads", "csv");

//defining Schema for CSV data storage
const csvSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    file: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

//multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, CSV_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//static functions
csvSchema.statics.uploadedCSV = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("csv");
csvSchema.statics.csvPath = CSV_PATH;

//exports
const CSVFile = mongoose.model("CSVFile", csvSchema);
export default CSVFile;
