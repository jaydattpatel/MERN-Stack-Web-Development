/*
author : Jaydatt Patel

https://nodejs.org/api/fs.html

path module : The Path module provides a way of working with directories and file paths so Program can executed with cross plateform without any issue with '/' or '\'.

*/

//importing fs module and path module
const fileSystem = require('fs');
const path = require('path');

const file_path = path.join('File-Folder','008-File.txt');
const file_pathResolve = path.resolve('File-Folder','008-File.txt');
const file_extension = path.extname(file_pathResolve);

console.log("file_path :",file_path);
console.log("file_pathResolve :",file_pathResolve);
console.log("file_extension :",file_extension);


console.log('---------Reading--------');
// reading file data
fileSystem.readFile(file_path, (err,data) => {
    if(err){
        console.log('Unable to read file : ', err);
    }else{
        console.log(data.toString());
    }
});
    

