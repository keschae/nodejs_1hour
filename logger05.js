// this shows exactly how node wraps it in a function
// (function (exports, require, module, __filename, __dirname) {

    var url = 'http://mylogger.io/log';

    function log(message)
    {
        // send an HTTP request
        console.log(message);
    }
    
    module.exports = log;

    console.log(module);

    // both of the following are valid
    // module.exports.log = log;
    // exports.log = log;

    // cannot do the following statement because exports 
    // is a reference to module.exports
    // exports = log;

// })

  