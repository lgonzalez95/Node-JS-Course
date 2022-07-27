var person = { //This is an object literal
    firstname: 'Luis',
    lastname: 'González',
    greet: function(){
        console.log('Hello, ' +this.firstname + ' ' + this.lastname);
    }
}

person.greet();

console.log(person['firstname']);