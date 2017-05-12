var fs = require("fs");

var files = fs.readdirSync('.git');
console.log(files);

/*
Asynchrounously
var fs = require("fs");

fs.readdir('.git', function(err, files){
	
	console.log(files);

});
console.log("Reading Files...");
*/