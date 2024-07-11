/*

author : Jaydatt Patel

You can directly serve static files inside public folder or specified folder. files outside the  folder can not be access directly.

*/

const express = require('express');

//server
const server = express();

server.get('/', (req, res) => {
  return res.send('Welcome to Express');
});

//my static files are in public folder which can be accessed directly.
server.use(express.static('public'));
server.use(express.static('publicMy'));

server.listen(3100,()=>{
    console.log('Server is listening on port 3100.......');
});

