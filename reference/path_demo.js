const path = require('path');

console.log(__filename);

// Base file name
console.log(path.basename(__filename));


// Directory name
console.log(path.dirname(__filename));


// extension
console.log(path.extname(__filename));


// create path object
console.log(path.parse(__filename));

// concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));