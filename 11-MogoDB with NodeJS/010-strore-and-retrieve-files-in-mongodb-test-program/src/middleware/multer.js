import multer from "multer";

// Multer configuration to not save files to the filesystem
const storage = multer.memoryStorage();
export const upload = multer({ storage });
