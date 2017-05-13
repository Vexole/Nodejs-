var fs = require('fs');

//fs.renameSync('js/init1.js', 'js/init.js');

fs.rename("init.js", 'js/init.js', function(err){
	console.log("Renamed and moved");
});

try{
	fs.unlinkSync('js/init.js');
}catch(err){
	console.log(err);
}

fs.unlink('js/init.js', function(err){
	if (err) {
		console.log(err);
	}else{
		console.log(File removed);
});

//mkdir and rmdir for directory