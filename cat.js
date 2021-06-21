const fs = require('fs');


module.exports = function(fileName, done) {
  fs.readFile(`./${fileName}`, 'utf-8', (err, lines) => {
    if(err) {
      done('Something went wrong!')
    }
    else {
      done(lines + '\n');
    }
  });
}
