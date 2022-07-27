function greet() {
    console.log("Hi");
}

greet();

//functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//function expression
var greetMe = function () {
    console.log("Hi Luis");
}

greetMe();

//it's first-class

logGreeting(greetMe);

//use function expression on the fly
logGreeting(function () {
    console.log("On the fly");
})