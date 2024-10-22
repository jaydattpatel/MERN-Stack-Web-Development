//add the module
import CSVFile from "../models/mongoose.js";
import fs from "fs";
import path from "path";
import papa from "papaparse";

//render homepage
export const homePage = async (req, res, next) => {
  try {
    let files = await CSVFile.find({});
    res.render("home", {
      title: "CSV Upload | Home",
      files: files,
    });
  } catch (err) {
    next(err);
  }
};

//create and parse CSV
export const uploadFile = (req, res, next) => {
  CSVFile.uploadedCSV(req, res, async function (err) {
    try {
      let csvFile = await CSVFile.findOne({ name: req.file.originalname });
      if (csvFile) {
        req.flash("error", "CSV already exists!");
        return res.redirect("back");
      }

      //parsing CSV using papaparse
      const CSVFileUP = req.file.path;
      const csvData = fs.readFileSync(CSVFileUP, "utf8");

      const conversedFile = papa.parse(csvData, {
        header: false,
      });

      //allowing only CSV input type
      if (req.file && req.file.mimetype == "text/csv") {
        //inserting the converted JSON to DB
        let csvFile = CSVFile.create({
          name: req.file.originalname,
          file: conversedFile.data,
        });
        req.flash("success", "CSV uploaded successfully");
        return res.redirect("/");
      } else {
        req.flash("error", "Only CSV file allowed");
        return res.redirect("back");
      }
    } catch (err) {
      //cathching errors and rendering common error page in the FE along with notification
      console.log("error", err);
      req.flash("error", "something went wrong to upload file.");
      return res.render("servererror");
    }
  });
};

//display CSV Data
export const displayCSV = async (req, res, next) => {
  try {
    let displayData = await CSVFile.findById(req.params.id);
    return res.render("table", {
      title: "CSV Upload | Details",
      file: displayData.name,
      keys: displayData.file[0],
      results: displayData.file,
    });
  } catch (err) {
    next(err);
  }
};

//delete CSV from DB
export const deleteCSV = async (req, res, next) => {
  try {
    let deleteCSV = await CSVFile.findByIdAndDelete(req.params.id);
    req.flash("success", "CSV removed successfully");
    return res.redirect("back");
  } catch (err) {
    next(err);
  }
};
