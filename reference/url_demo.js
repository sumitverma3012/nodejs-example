const url = require('url');

const myUrl = new URL('https://www.testing.com?active=yes');

console.log(myUrl.href);