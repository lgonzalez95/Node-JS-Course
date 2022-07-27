var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Test Name'});// The parameter would overwrite the 'this' variable
obj.greet.apply({name: 'Test Name'});// same as call, but works with arrays instead of comma parameters