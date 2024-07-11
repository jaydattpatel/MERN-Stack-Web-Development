/* 
author : Jaydatt Patel 

Send Post Request using HTTP protocols

*/

const http = require('http');

const server = http.createServer((req, res) => {
    // if request is post then
    if (req.method == 'POST') {

        console.log("req.body : ", req.body);

        // expecting data from client
        let body = '';

        // event when data receives.
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        //event when request ends and all data transfered
        req.on('end', () => {
            console.log(body);
            res.end('Data is received : ' + body); //ending response
        });

    } else {    //else request is not POST
        console.log('Function ends here');
        res.end('Welcome to node js');
    }   
});

server.listen(3100)

console.log('Server is listening on 3100...........')
