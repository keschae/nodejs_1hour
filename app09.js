// this one is a class, notice capitalization
const EventEmitter = require('events');
// new object - instance of class
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called')
})

// raise an event
emitter.emit('messageLogged');

// When you run this emit method, 
// it iterates over all event listeners synchronously
