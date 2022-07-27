var buffer =  new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 25;//not stored because array buffer is 8 byte = 8 x 8 = 64, and int32 x 2 = 64
console.log(view);