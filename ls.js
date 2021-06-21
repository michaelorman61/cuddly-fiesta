const fs = require('fs');

module.exports = function (done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if(err) {
      done('Something went wrong!')
    }
    else{
      const output = (files.join('\n'));
      done(output);
    }
  })
}


