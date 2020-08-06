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


NPM is the largest open-source software registry in the world. It includes a website, a registry of Node Packages, and a command line interface that allows us to easily incorporate packages into our programs.

Nodemon is a package that makes developing node apps easier. It restarts the application everytime you save changes to your code.

To install Nodemon globally type:
```
npm i -g nodemon
```
To run Nodemon in your command line type
```
nodemon
```
To quit nodemon
```
CTRL+C
```

A third party module you can use is moment which allows you to print data in
a easier to read way.
To install moment you would go to the folder you would want to use it in and type
```
npm i moment
```
After installing make sure there is a folder called node_modules in the folder you installed it in

Node-models folders can be huge and don't need to be pushed to github for this you would use gitignore. Type in the command line
```
touch .gitignore
```
Then go to the .gitignore folder and type in there
```
node_modules
```

## Adding Express to a Node app

First you would create your directory
```
mkdir hello-express
```
Initialize node
```
cd hello-express
npm init
```
Then install express
```
npm i express
```
You will notice your get a node_modules folder for express as well as express will be in your package.json under dependencies.
see hello-express in codealongs for examples.

## Routes 

A route is a combination of a URL pattern and HTTP Verb.

HTTP Verb
* get = read
* post = create
* put = update
* delete = delete

also see hello-express in codealongs for examples
```
const hello = (req, res) => {
  res.send('Hello, World!');
}

app.get('/', hello);
```
The request and response Objects

request
* req.body - this is where any submitted form data will be stored for us.
* req.params - this is where special route variables are stored for us.
* req.query - this is where the query string data is stored.

response
* res.send() - sends back a simple string. Not really used in production. This is kind of like the console.log() for network requests. Good for testing if the route is working.
* res.sendFile() - more sophisticated in that it can send an entire file back but file is static.
* res.render() - used to render data into templates with the selected template engine. More on this later.
* res.json() - used to send object data back as JSON. Very common when writing a backend API. Much more on this later.

Paths

```
app.get('/', (req, res) => {
  res.send('You've reached the home route!');
});

app.get('/about', (req, res) => {
  res.send('This is a practice app to learn about express routes.');
});
```

Parameters

```
app.get('/', (req, res) => {
  res.send("You've reached the home route!");
});

app.get('/about', (req, res) => {
  res.send('This is a practice app to learn about express routes.');
});

app.get('/:input', (req, res) => {
  res.send("Our parameter is " + req.params.input + ".");
});
```

You can also combine Paths and Parameters

```
app.get("/greet/:name", (req, res) => {
  res.send("Hello " + req.params.name + "!");
});
```

## Views 

To make a personal website you first would stub out the route for the home, about, and blog page. You do this by using the HTTP Verb GET as well as the URL Pattern and a Message. Example:
```
Home
GET
/
"This is the Home Page!"
```

You would then create a views folder inside your project called views with an index.html, about.html, and blog-directory.html and put some basic html files in them for you to test. In your routes, replace the res.send(<message>) with res.sendFile(<absolute file path>)

home route example:
```
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/views/index.html');
});
```

## Templates 
