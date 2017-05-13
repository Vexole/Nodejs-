var fs = require('fs');

var txt = `Hello World`;

fs.writeFile('write.txt', txt.trim(), function(err){
	console.log('Created');
});