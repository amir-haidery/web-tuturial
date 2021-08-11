// What is Node.Js?

// Node.Js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
// Node.Js is designed to build scalable network applications.
// Node.Js can be download from the official Node.js website.
// Node.Js is a free and open-source server environment.
// Node.Js allows us to run JavaScript on the server.
// Node.Js can run on multiple operating systems.

// Why use Node.Js?
// You can use JavaScript in the entire stack.
// Many famous companies use Node.Js as their backend.
// Node.Js comes with a lot of useful built-in modules.
// Node.Js is fast.
// You can download and install Node.Js from its official website. You will see a page like this and then can select the compatible version for your operating system.



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// we got taht code from Node js website .By clicking it, we see the output as Hello World. It means that we have our own server with the help of Node.js. In the same way, we can pass any HTML code in place of “Hello world”. By doing so, we can make that page live by staring at our own server. 
// So I hope, you must have understood what is node and how to install it. In this tutorial, we have also made our own server. 


// console.log("Hello Amir hussain mohoib");



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors & more designing</title>
      <style>
          .container {
              border: 4px solid rgb(12, 58, 77);
              width: 700px;
              margin: 20px auto;
              padding: 15px 15px;
              background-color: rgb(61, 173, 173);
              border-radius: 10px;
          }
          button{
              color: aliceblue;
          }
          .btn {
              font-family: Georgia, 'Times New Roman', Times, serif;
              font-weight: bold;
              cursor: pointer;
              border: none;
              /* color: aliceblue; */
              font-size: 15px;
              background-color: rgb(34, 84, 107);
              padding: 5px 5px;
          }
  
          .btn:hover{
              color: rgb(255, 255, 255);
              background-color: rgb(10, 13, 15);
          }
          button:hover {
              color: rgb(255, 255, 255);
              background-color: rgb(231, 231, 231);
          }
          /* button:active
          {
              background-color: yellow;
          } */
  
          a {
              text-decoration: none;
              color: rgb(251, 251, 251);
          }
  
          a:hover {
              color: rgb(216, 240, 3);
              background-color: brown;
  
          }
          a:active{
              background-color: violet;
          }
          /* a:visited{
              background-color: black;
          
          } */
      </style>
  </head>
  
  <body>
      <div class="container" id="cont">
          <h2>Thisn is my heading button and ....</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, non voluptatem. Perferendis reprehenderit
              iste molestias tempore quae pariatur blanditiis quis sit excepturi qui doloribus atque suscipit, magni
              incidunt, quas voluptatum accusantium dolor aliquid, quia cumque vitae unde voluptas! Quaerat dolore error
              est, facilis tempore nostrum.</p>
          <a href="https://www.google.com/" target="_blank" class="btn">read more</a>
          <button class="btn"> contuct us</button>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});