// this one is a class
const EventEmitter = require('events');
// new object
const emitter = new EventEmitter();

// Register a listener
// now uses a fat arrow function
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

// raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raised: Logging {data: message}

// When you run this emit method, 
// it iterates over all event listeners synchronously
