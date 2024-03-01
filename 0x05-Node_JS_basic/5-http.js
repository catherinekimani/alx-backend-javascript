const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8').then((data) => {
      const lines = data.split('\n');
      const hashTable = {};
      let students = -1;
      let result = '';

      for (const line of lines) {
        if (line.trim() !== '') {
          const columns = line.split(',');
          const field = columns[3];
          const firstName = columns[0];
          if (students >= 0) {
            if (!Object.hasOwnProperty.call(hashTable, field)) {
              hashTable[field] = [];
            }
            hashTable[field] = [...hashTable[field], firstName];
          }
          students += 1;
        }
      }

      result += `Number of students: ${students}\n`;
      for (const key in hashTable) {
        if (Object.hasOwnProperty.call(hashTable, key)) {
          result += `Number of students in ${key}: ${hashTable[key].length}. List: ${hashTable[key].join(', ')}\n`;
        }
      }
      resolve(result);
    })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        response.writeHead(200);
        response.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        response.writeHead(400);
        response.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
