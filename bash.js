const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl')

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{

  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd + '\n');
  //process.stdout.write('\nprompt > ');
  if (cmd == 'pwd'){
    pwd(done);
  }
  else if(cmd == 'ls'){
    ls(done);
  }
  else if(cmd.substring(0,3) == 'cat') {
    cat(cmd.substring(4), done);
  }
  else if(cmd.substring(0,4) == 'curl'){
    curl(cmd.substring(5), done);
  }
});
