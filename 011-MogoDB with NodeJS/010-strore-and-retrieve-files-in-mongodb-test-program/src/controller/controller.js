import { GridFSBucket, ObjectId } from "mongodb";
import { FileDB } from "../config/mongodb.js";
import { Readable } from "stream";
import fs from "fs";

export const saveFileInDB = (req, res, next) => {
  try {
    const bucket = new GridFSBucket(FileDB);

    // Create a readable stream from the buffer
    const readableStream = new Readable();
    readableStream.push(req.file.buffer);
    readableStream.push(null); // Signal end of stream

    // Upload the file to GridFS
    const uploadStream = bucket.openUploadStream(req.file.originalname);

    readableStream
      .pipe(uploadStream)
      .on("error", (error) => {
        return res.status(500).send("Error uploading file: " + error.message);
      })
      .on("finish", () => {
        return res
          .status(200)
          .json(`File uploaded successfully with id : ${uploadStream.id}`);
      });
  } catch (error) {
    return res.status(500).send("Error: " + error.message);
  }
};

export const retrieveFileFromDB = async (req, res, next) => {
  try {
    const bucket = new GridFSBucket(FileDB);

    // Create a download stream
    const downloadStream = bucket.openDownloadStream(
      new ObjectId(req.params.id)
    );
    downloadStream.on("error", (error) => {
      return res.status(404).send("File not found");
    });

    // Pipe the download stream to the response
    res.set("Content-Type", "application/octet-stream");
    downloadStream.pipe(res);
  } catch (error) {
    return res.status(500).send("Error: " + error.message);
  }
};

export const saveFileInDisk = async (req, res, next) => {
  try {
    const bucket = new GridFSBucket(FileDB);

    const downloadStream = bucket.openUploadStreamWithId(req.params.id);

    const writeStream = fs.createWriteStream(`downloaded_${req.params.id}`);

    downloadStream
      .pipe(writeStream)
      .on("error", (error) => {
        console.error("Error downloading file:", error);
      })
      .on("finish", () => {
        console.log("File downloaded successfully");
      });
  } catch (err) {
    console.log("Error : Unable to Store File in Disk\n", err);
  }
};
