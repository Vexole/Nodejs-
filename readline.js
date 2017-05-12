var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var person = {
	name: '',
	sayings: []
}

rl.question("What is your friend name? ", function(answer){
	person.name = answer;
	rl.setPrompt(`What does ${person.name} say?\t`);
	rl.prompt();

	rl.on('line', function(saying){
		if(saying.toLowerCase().trim() === "exit"){
			rl.close();
		}
		person.sayings.push(saying);
		rl.setPrompt("What else? (type 'exit' to leave)\t");
		rl.prompt();
	});
});

rl.on('close', function(){
	console.log("%s says %j", person.name, person.sayings);
	process.exit();
});