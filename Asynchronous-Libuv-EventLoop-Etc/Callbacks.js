function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Luis G'
    }
    callback(data);
}


greet(function (data) {
    console.log('Callback was invoke ' + data.name);
});