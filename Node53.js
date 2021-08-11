console.log("this is class number 53");

// this how we used to write a code without of function
let name = "Amir";
let name1 = "sarfaraz";
let name2 = "Tanzil";
let name3 = "Asif";


// how JavaScript functions help us. Assume that we have to repeatedly write the particular code for a certain task as shown below

// console.log(name +" "+ "is good boy");
// console.log(name1+" "+ "is good boy");
// console.log(name2+" "+ "is good boy");
// console.log(name3+" "+ "is good boy");

// To avoid this JavaScript functions come into action. We can write the above code with the help of JavaScript functions as follows


// We have increased the use of code reusability with the help of a JavaScript function. Also, we can increase more number of parameters in the JavaScript functions without writing the code again. Let us see the below code-

function greet(variable, text) {
    console.log(text + " " + variable + " " + "is good boy");
    console.log("this is inside of function");
}
let text = " good morning";


greet(name, text);
greet(name1, text);
greet(name2, text);
greet(name3, text);


// function sum(a,b,c)
// {
//     if(a>b && a>c)
//     {
//         return a;
//     }
//     else if (b>c) {
//         return b;

//     } else {
//         return c;
//     }


// }
// let a=55112;
// let b=2225;
// let c=578;

// let returnVar = console.log( "the max number is  "+ sum(a,b,c));