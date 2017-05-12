var path = require('path');
var util = require('util');

console.log(path.basename(__filename));
util.log(path.basename(__filename));

var dir = path.join(__dirname, "www", "files", "uploads");

process.stdout.write(`${dir}`);