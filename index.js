const myModule = require('./myModule.js');

console.log(myModule.beBasic());

myModule.count()

var fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});