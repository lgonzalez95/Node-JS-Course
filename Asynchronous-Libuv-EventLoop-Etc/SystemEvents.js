/**
 * The system events are handled by a C++ library called libuv
 * Livub connects a request to the OS, it has a queue of completed events
 * it also has an event loop to check if something has happened
 * Livuv calls back v8 when the event is completed
 */

/**
 * Buffer: A temporary holding spot for data
 * being moved from one place to another
 */

/**
 * Stream: A sequence of data made 
 * available over time.
 * Basically data moving from one place
 * to another
 */

/**
 * Character sets: Number for a given character
 * Character encoding: Converting characters sets to binary data
 */

var buffer = new Buffer.from('Hello', 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[1]);
buffer.write('LU');
console.log(buffer.toString());