var time = 3000;
var current = 0;
var wait = 500;

console.log("Waiting!!");

var interval = setInterval(function(){
	current += wait;
	console.log(`${current/1000} seconds waited ...`);
}, wait);

setTimeout(function(){
	console.log("Done");
	clearInterval(interval);
}, time);