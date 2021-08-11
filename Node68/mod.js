console.log("This is modules page");

// In the above example, we have created a simple average function that takes the value as arr and returns the average

function average(arr) {
    let sum = 0;
    arr.forEach(element => {

        sum += element;
    });
    return sum / arr.length;
}

//2- After executing this, one thing to notice is, the code gets executed but we still do not get the function back. To get back the function, we have to make the function to behave explicitly in mod.js file. We can do this as follows-

// module.exports= average;

// We can also create an object and make it as a module. For example, we can write as follows-

module.exports = {

    avg: average,
    name: "Amir hussain Mohibi",
    rep: "Github"

}


//3- In the same way, we can export multiple objects and create our own modules with the help of NodeJs. However, there is another method to call the above object. If we write as follows in mod.js file-

// module.exports.name ="Amir hussain Mohibi"