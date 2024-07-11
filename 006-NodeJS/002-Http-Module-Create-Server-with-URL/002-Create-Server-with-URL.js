/*
author : Jaydatt Patel;
Create a server and send response as per URL.
*/


// 1. Import http library/module
const http = require('http');

// 2. Create Server.
const server = http.createServer((req, res) => {

  res.write('Welcome to ');

  switch(req.url){
    case '/user': res.write('User Page'); break;
    case '/product': res.write('Product Page'); break;
    default : res.write('Home Page');
  }
  
  res.end('\nNodeJS Server');
});

// 3. Specify a port to listen to client's requests.
server.listen(3100, () => {
  console.log('Server is listening on port 3100........');
});
