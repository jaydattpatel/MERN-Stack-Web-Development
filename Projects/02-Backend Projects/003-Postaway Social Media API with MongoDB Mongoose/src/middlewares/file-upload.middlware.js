import multer from "multer";
// configure with filename and storage 
const storageA=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/avatar/');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g, '_')+file.originalname);
    },
});
const uploadA=multer({
    storage:storageA
})
const storageB=multer.diskStorage({
    destination:(req,file,cb)=>{
   cb(null,'./uploads/posts/');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g, '_')+file.originalname);
    },
});
const uploadB=multer({
    storage:storageB
});
export {uploadA,uploadB};