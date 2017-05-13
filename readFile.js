var fs = require('fs');
var path = require('path');
var fs = require('fs');

/*var contents = fs.readFileSync('core.js', 'UTF-8');
console.log(contents);*/

/*fs.readFile('core.js', 'UTF-8', function(err, contents){
	console.log(contents);
});*/

fs.readdir('../js', function(err, files){
	files.forEach(function(fileName){
		var file = path.join(__dirname, 'js', fileName);
		var stats = fs.statSync(file);

		if(stats.isFile()){
			fs.readFile(file, 'UTF-8', function(err, contents){
				console.log(contents);
			});
		}
	});
});