var time = 3000;
var current = 0;
var wait = 500;
var percent = 0;

function percentage(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
	current += wait;
	percent = Math.floor((current/time)*100);
	percentage(percent);
}, wait);

setTimeout(function(){
	clearInterval(interval);
	percentage(100);
	console.log("\nDone");
}, time);

process.stdout.write('\n\n');
percentage(percent);