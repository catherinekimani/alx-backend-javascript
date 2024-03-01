const http = require('http');

const app = http.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
}).listen(1245);

module.exports = app;
