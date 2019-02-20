// Example of how to use a Node module

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

// ES6 / ES2015 : ECMAScript 6
// template string, notice back ticks

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory:  ${freeMemory}`);
