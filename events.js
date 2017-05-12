/*var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('custom', function(message, status){
	console.log(`${status} : ${message}`);
});

emitter.emit('custom', 'This is a message', 'Ok');*/

var Emitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name){
	this.name = name;
};

util.inherits(Person, Emitter);

var ben = new Person('Benjamin Franklin');

ben.on('speaks', function(saying){
	console.log(`${this.name} says ${saying}`);
});

ben.emit('speaks', "As you sow, so you reap");