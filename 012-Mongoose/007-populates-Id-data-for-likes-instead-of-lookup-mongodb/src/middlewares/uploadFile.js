import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads/"); // set error: null and destination : "path" to cb
  },

  filename: (req, file, callBack) => {
    const newName = Date.now() + "-" + file.originalname;
    callBack(null, newName); // set error: null and filename: "name" to cb
  },
});

// export multer object by config storage.
export const uploadFile = multer({ storage: storageConfig });
