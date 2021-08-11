//  The modules in Node.Js are the same as JavaScript libraries. These are the set of functions that we want to include in 
//  our application. To see the whole list of modules, you can visit the official website here. Let us see an example 
//  wherewith the help of these modules, we can read and write the same file.

//1- The first step is to include the module with the help of the following code-
// const fs = require("fs");

//2- The next step is, we have to write the name of the file, which we want to read. In this example, assume the file name //is “dele.txt”. The code for reading the file is as follows-
// const text = fs.readFileSync("dele.txt", "utf-8");

// 3- he function readFileSync synchronously reads the entire contents of a file.
// Finally, the last step is to print the file as follows-
// console.log(text);


// we can use modeels from following module

// https://nodejs.org/api/modules.html


const fs = require("fs");
let text = fs.readFileSync("dele1.txt", "utf-8");
console.log(text);

console.log("creating a new file");

//creating new file and read from the another file and write it  in new file(dele3) 
fs.writeFileSync("dele3.txt", text);



fs.writeFileSync("dele2.txt", "Helloo Amir hussain mohibi this the first file you havev written by the help of writFileSync");