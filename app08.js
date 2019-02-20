const fs = require('fs');

// syncronous methods
// const files = fs.readdirSync('./');
// console.log(files);

// always use async methods
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log ('Result', files);
});
