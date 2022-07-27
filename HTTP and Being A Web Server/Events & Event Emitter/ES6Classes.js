'use strict';

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello, ${this.firstname} ${this.lastname} `);
    }
}

var luis = new Person('Luis', 'González');
luis.greet();