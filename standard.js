var questions = [
	"What is your name?",
	"What do you do?",
	"What is your fav programming language?"
]

var answers = [];

function ask(i){
	process.stdout.write(`\n\n ${questions[i]}`);
	process.stdout.write(`\n  >  `);
}

process.stdin.on('data', function(data){
	answers.push(data.toString().trim());

	if(answers.length < questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});

process.on('exit', function(){
	for(var i=0; i< answers.length; i++){
		process.stdout.write(`\n ${answers[i]} \n`);
	}
});

ask(0);