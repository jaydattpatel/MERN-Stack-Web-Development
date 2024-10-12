/*
author : Jaydatt Patel;
Create a server and run file using nodemon

nodemon : It is used to restart server automatically when files modify.
*/


// 1. Import http and FileSystem library/module
const http = require('http');
const FileSystem = require('fs');

// 2. Create Server.
const server = http.createServer((req, res) => {
    let data = FileSystem.readFileSync("004-StaticHTML.html").toString();
    res.write(data);
    res.end('\nNodeJS Server');
});

// 3. Specify a port to listen to client's requests.
server.listen(3100, () => {
  console.log('Server is listening on port 3100.........');
});
