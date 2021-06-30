const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    } 
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }

    if(req.url === '/api/users') {
        const users = [
            {name: 'test 1', age: 20},
            {name: 'test 2', age: 30}
        ]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));