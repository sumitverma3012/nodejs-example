const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err) throw err;
    console.log('folder created');
});

// write content to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
    if(err) throw err;
    console.log('file with content created');
})

// append file content
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
    if(err) throw err;
    console.log('Inside writeFile');
    
    // appendFile is inside the callback, as the writeFile is async
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World Again!', (err) => {
        if(err) throw err;
        console.log('file with content created');
    })

})

// read the content of a file
fs.readFile( path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


// rename a file
fs.rename( path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'newhello.txt'), (err) => {
    if(err) throw err;
    console.log('Done');
})