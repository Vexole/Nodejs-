var http = require('http');

var data = require('./data/inventory');

http.createServer(function(req, res){
	if(req.url === '/'){
		res.writeHead(200, {'Content-Type': "text/json"});
		res.end(JSON.stringify(data));
	}else if(res.url === '/instock'){
		listInStock(res);
	}else if(res.url === '/onorder'){
		listOnBackOrder(res);
	}else{
		console.log('404 Error');
	}
}).listen(3000);

console.log("Port 3000");

function listInStock(res){
	var inStock = data.filter(function(item){
		return item.avail === "In stock";
	});
	res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
	var onOrder = data.filter(function(item){
		return item.avail === "On back order";
	});
	res.end(JSON.stringify(onOrder));
}