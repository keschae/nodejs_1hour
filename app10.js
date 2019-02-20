// this one is a class
const EventEmitter = require('events');
// new object
const emitter = new EventEmitter();

// Register a listener
// this must be called first
emitter.on('messageLogged', function(arg) { // e or eventArg
    console.log('Listener called', arg)
})

// raise an event
// past data about the event that happened
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// When you run this emit method, 
// it iterates over all event listeners synchronously
