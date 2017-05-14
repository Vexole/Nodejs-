var http = require('http');

var server = http.createServer(function(req, res){
//	res.writeHead(200, {"Content-Type": 'text/plain'});
	//res.end("Hello World");

	res.writeHead(200, {"Content-Type": 'text/html'});
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>First Server</title>
			</head>
			<body>
				<h2>Running for the first time</h2>
			</body>
		</html>
		`);
});


server.listen(3000);
console.log("Running");