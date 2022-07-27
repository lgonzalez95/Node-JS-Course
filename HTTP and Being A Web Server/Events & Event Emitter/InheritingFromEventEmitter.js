var EventEmitter = require('events');
var util = require('util');

function Greetr1() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr1, EventEmitter);

Greetr1.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr1();

greeter1.on('greet', function (data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
console.log();

/**
 * New implementation since inherits is discouraged
 */
class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet = function (data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');