const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

const done = (output) => {

}

//process.stdout.write('promt > ');
process.stdin.on('data', (data) =>{

  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd + '\n');
  //process.stdout.write('\nprompt > ');
  if (cmd == 'pwd'){
    pwd();
  }
  else if(cmd == 'ls'){
    ls();
  }
  else if(cmd.substring(0,3) == 'cat') {
    cat(cmd.substring(4));
  }

});
process.stdout.write('\nprompt > ');
