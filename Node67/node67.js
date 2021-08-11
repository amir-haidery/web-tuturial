
//  how to create a custom backend using NodeJs. Backend simply means serving the files based upon user requests.


const http = require('http');
const fs = require('fs');

// we will make random localhost and port to listen as follows-

const hostname = '127.0.0.1';
const port = 3000;


const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

// We will now create a server and gives it an arrow function as follows-

const server = http.createServer((req, res)=>{

    console.log(req.url);
    url =req.url;



    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   
    if (url == '/')
    {
        res.end(home);

    }
    else if (url == '/home')
    {
        res.end(home);

    }
    else if (url == '/about')
    {
        res.end(about);

    }
    else if (url == '/services')
    {
        res.end(services);

    }
    else if (url == '/contact')
    {
        res.end(contact);

    }
    else{

        res.statusCode = 404;
        res.end("<h>404 is not found</h>");
    }

});

// we will make the port to listen

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });