# Node-Express

Node is a platform that uses JavaScript for creating network applications.It gives us a server-side environment that can handle logic written in Javascript. It allows JavaScript to be run on a server. Express is a light-weight, web application framework for writing RESTful APIs in Node.js.

## Starting a node app

The first thing you do is to install node on your machine using homebrew
```
brew install node
```
Create a new folder for your node project
```
mkdir node-project
```
You then need to initialize node inside your project folder using:
```
npm init
```
This will create a package.json file where the values we just set up via npm init.

You then create your entry point
```
touch index.js
```
You then can run your project:
```
node index.js
```
## Node modules

Creating, Exporting, and Importing modules.

Creating your module, inside:
```
node-project
```
Create a file:
```
touch myModule.js
```
In Node, module.exports is an object that will hold the code to be exported

Add code to your myModule.js file, example:
```
module.exports.beBasic = () => "That's so fetch!"
```
Import your module in index.js :
```
const myModule = require('./myModule.js');

console.log(myModule.beBasic());
```
Then run index.js
```
node index.js
```
You can then add more code to myModules:
```


module.exports.count = () => {
    for (let i = 0; i<= 10; i++)
    console.log(i)
}

```
The exported module will only contain the code is encapsulated in the module.exports object.

There is also built in modules, one example is fs modules which stands for 'file system'. For example:
Create a story.txt file
```
touch story.txt
```
Write this to the entry point:
```
var fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});
```
Then run your index.js to read your story in the terminal
```
node index.js
```
also look at hello-node directory in codealongs for HTTP core modules
## Node Packages 

There are three types of node modules
* Core Modules (like fs) 
* Local Modules (that you create) 
* Third Party Modules
