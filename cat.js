const fs = require('fs');


module.exports = function(fileName) {
  fs.readFile(`./${fileName}`, 'utf-8', (err, lines) => {
    if(err) {
      throw err;
    }
    else {
      process.stdout.write(lines + '\n');
    }
  });

}
