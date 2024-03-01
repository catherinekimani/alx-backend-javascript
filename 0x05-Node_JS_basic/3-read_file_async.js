const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8').then((data) => {
      const lines = data.split('\n');
      const hashTable = {};
      let students = -1;

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

      console.log(`Number of students: ${students}`);
      for (const key in hashTable) {
        if (Object.hasOwnProperty.call(hashTable, key)) {
          console.log(`Number of students in ${key}: ${hashTable[key].length}. List: ${hashTable[key].join(', ')}`);
        }
      }
      resolve();
    })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
