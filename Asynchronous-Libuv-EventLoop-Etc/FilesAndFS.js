/**
 * Error first callback: Callbacks that take an error object
 * as the first parameter, if no error it's set to null
 */

var fs = require('fs');

//Synchronous
var greet = fs.readFileSync(__dirname + '/Greet.txt', 'utf-8');
console.log(greet);

//Asynchonous
var greet2 = fs.readFile(__dirname + '/Greet.txt', 'utf-8',
    function (error, data) {
        console.log('Callback ' + data);
        return data
    });

console.log('End Code');