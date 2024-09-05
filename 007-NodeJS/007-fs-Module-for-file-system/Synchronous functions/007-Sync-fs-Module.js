/*
author : Jaydatt Patel

https://nodejs.org/api/fs.html

fs module : to read and write files synchrounously

*/

//importing fs module
const fileSystem = require('fs');

console.log('---------Reading--------');
try{
    // reading file data
    const buffer = fileSystem.readFileSync('./007-In-flow.txt', { encoding : 'utf-8'});
    console.log(buffer);
}catch(err){
    console.log('Unable to read file : ', err);
}
 
console.log('---------create and overwriting--------');
// writing to file data
try{
    fileSystem.writeFileSync('./007-Out-flow.txt' , `Welcome to NodeJS\nName : Jaydatt`);
    fileSystem.writeFileSync('./Test.txt' , `To delete file`);
}catch(err){
    console.log('Unable to write file : ', err);
}

console.log('---------Appending--------');
fileSystem.appendFileSync('./007-Out-flow.txt' , "\nAppended JavaScript");


console.log('---------deleting file--------');
try{
    fileSystem.unlinkSync('./Test.txt');
}catch(err){
    console.log('Unable to delete file : ', err);
}