// NPM is basically a package manager for Node.Js packages or modules. The NPM program is installed on your computer when you install Node.Js.
// NPM helps us to manage the packages in NodeJs.
// we have only one file inside this directory i.e., Node69.js
// But as soon as we write npm init on the terminal, it asks several questions like the package name, version, description, entry point, keyword, author, etc.
// When we execute this, there is a new file called package.json inside the Node69 directory.
// If we want to install any specific version of the dependency, we can easily do that. For example, if want to install version 1.3.5 of slugify, we have to write as npm install slugify@1.3.5. As soon as write this, the version gets updated as follows

// Let us now see what dev dependencies are. There are times when we want to install the packages only for development purposes, not for production purposes. In that case, dev dependencies are useful. The best example of this is nodemon. It gives us the server which automatically gets restart every time. 
// To install this, we have to write-

// npm intall nodemon --save-dev

// we can install nodemon golobaly as well , as follow
// npm instal nodemon --golbal

// 1.0.0    (1 = major). (0 = minor). (0 = debg fixing)
// 1.0.1    (when we fix some debg in our application the we make new version to user 1.0.1)
// 1.1.0    (when we add some function in our application the we make new version to user 1.1.0)
// 2.0.0     (when we change functionalitiy of our application the we make new version to user 2.0.0)
// (^1.3.5 (^ this is for new version of specific modules ))
// (~1.3.5 (~ this is used for a version we want))

console.log("This is tutorial 69 ");


/* 
NPM helps us to manage the packages in NodeJs.To understand this,
 we will make a new directory as tut69.Till now, we have only one file inside this directory i.e.,
Node69.js.But as soon as we write npm init on the terminal, it asks several questions like the package name, version, description, entry point, keyword, author, etc.When we execute this, 
there is a new file called package.json inside the Node69 directory.
*/