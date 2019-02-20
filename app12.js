
// const EventEmitter = require('events');

const Logger = require('./logger12');
const logger = new Logger();


// Register a listener
// now uses a fat arrow function
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

logger.log('message');
