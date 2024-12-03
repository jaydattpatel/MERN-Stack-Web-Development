import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/uploads/");
  },
  filename: (req, file, callBack) => {
    const newName = Date.now() + "-" + file.originalname;
    callBack(null, newName);
  },
});

export const uploadFile = multer({ storage: storageConfig });
