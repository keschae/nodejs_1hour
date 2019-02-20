// Lesson about global objects

// These are globally available
console.log('Tester'); 

// setTimeout(100);
// clearTimeout();

// Used to call a function repetitively
// setInterval();
// clearInterval();

// window.console.log(); 
// however, window object is undefined in node.js
// or console.log() Without the window prefix

// This one would also not work
// window.setTimeout()

// However, this one would work fine
// global.setTimeout(100);

var message = ''; // Not defined globally, only in this module

// The following should fail, in a browser message would be global
// global.message;

// console.log(global.message); // This variable undefined

global.console.log("Finihed!");

console.log(module);