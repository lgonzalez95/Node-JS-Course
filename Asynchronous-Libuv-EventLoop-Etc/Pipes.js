/**
 * Connecting two streams by
 * writing to one what is being
 * read from another
 */

 var fs = require('fs');
 var zlib = require('zlib');

 var readable = fs.createReadStream(__dirname + '/RandomText.txt');
 var writable = fs.createWriteStream(__dirname + '/RandomTextCopy.txt');
 var compressed = fs.createWriteStream(__dirname + '/RandomTextCopy.txt.gz');
 var gzip = zlib.createGzip(); //Readable and writable stream
 
 readable.pipe(writable);

 readable.pipe(gzip).pipe(compressed);