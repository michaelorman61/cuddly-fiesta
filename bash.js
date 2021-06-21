const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('promt > ');
process.stdin.on('data', (data) =>{

  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  if (cmd == 'pwd'){
    pwd();
    process.stdout.write('\nprompt > ');
  }
  else if(cmd == 'ls'){
    ls();
  }
});
