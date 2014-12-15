var fs = require('fs')

var filename = process.argv[2];

file = fs.readFileSync(filename);

data = file.toString();

var number = data.split('\n').length
number = number - 1; // accounts for last spot

console.log(number);
