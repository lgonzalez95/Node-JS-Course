/**
 * Chunks: A piece of data being transmitted through a stream
 * Streams are events emitters, any stream has access to methods like on
 * Streams are a base/abstract class: we inherit from them
 */

var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/RandomText.txt', { encoding: 'utf-8', highWaterMark: 10 * 1024 });
var writable = fs.createWriteStream(__dirname + '/RandomTextCopy.txt');

readable.on('data', function (chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});