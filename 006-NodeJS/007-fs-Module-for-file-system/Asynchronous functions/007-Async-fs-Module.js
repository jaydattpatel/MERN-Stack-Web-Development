/*
author : Jaydatt Patel

https://nodejs.org/api/fs.html

fs module : to read and write files asynchrounously

*/

//importing fs module
const fileSystem = require('fs');

console.log('---------Reading--------');

// reading file data
fileSystem.readFile('./007-In-flow.txt', (err,data) => {
    if(err){
        console.log('Unable to read file : ', err);
    }else{
        console.log(data.toString());
    }
});
    
console.log('---------writing--------');
// writing to file data
fileSystem.writeFile('./007-Out-flow.txt' , `Welcome to NodeJS\nName : Jaydatt`, (err) => {
    if(err){
        console.log('Unable to write file : ', err);
    }
});

console.log('---------Appending--------');
fileSystem.appendFile('./007-Out-flow.txt' , "\nAppended JavaScript", (err) => {
    if(err){
        console.log('Unable to append to file : ', err);
    }
});

console.log('---------deleting file--------');

// fileSystem.unlink('./Test.txt' , (err)=>{
//     if (err){
//         console.log('Unable to delete file : ', err);
//     }else{
//         console.log('File Deleted');
//     }
// });

