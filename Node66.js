// how to serve HTML files using NodeJs.
// Backend is all about serving the files.The primary task in the backend is to serve 
//the files according to the requests of the user. 


const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const fileContent = fs.readFileSync('./Html28_flexbox.html');



const server = http.createServer((req, res) => {

    req.setHeader(200, { 'Content-type': 'text/html' });

    res.end(fileContent);
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
});