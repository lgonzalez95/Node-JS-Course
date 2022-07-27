var Emitter = require('./EventEmitter');
var nodeJsEmitter = require('events');
var eventConfig = require('./Config').events;

var emtr = new Emitter();
var nodeEmtr = new nodeJsEmitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Agreeting ocurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);

console.log();
console.log();

nodeEmtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});

nodeEmtr.on(eventConfig.GREET, function() {
    console.log('Agreeting ocurred!');
});

console.log('Hello!');
nodeEmtr.emit(eventConfig.GREET);