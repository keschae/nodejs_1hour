
var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.url = url;

// or 
// module.exports = log;
// or 
// module.exports.endPoint = log;

// global.console.log(global);
// module.exports is not in global

// console.log(module.exports);
console.log(module);