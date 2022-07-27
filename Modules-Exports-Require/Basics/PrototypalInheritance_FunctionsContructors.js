//function constructors are normal functions used to construct objects

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}


/**
 * Prototype: Allows to add methods and properties to be
 * available to all objects created from the function
 * constructor
*/
Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname  +' ' + this.lastname);
}

var luis = new Person('Luis', 'González');
console.log(luis.firstname);
luis.greet();