console.log("This is index page");



// 1-Now to import this module, we have to write as follows in index.js
// const mod = require("./mod");
// console.log(mod);

//2-After executing this, one thing to notice is, the code gets executed but we still do not get the function back. To get back the function, we have to make the function to behave explicitly in mod.js file. We can do this as follows-

// const average = require("./mod");
// console.log(average([2,5]));



// this is how we import an object and called it from aonther modules
// add module

const mod = require("./mod");

console.log(mod.avg([9, 4]));

console.log(mod.name);

console.log(mod.rep);

// console.log(mod.name);