const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
//stdin.resume();

const interactiveTimer = function(stdin) {

  stdin.on('data', (key) => {
    if (Number(key)) {
      console.log(`setting timer for ${key} seconds`)
      setTimeout(() => stdout.write('\x07'), Number(key) * 1000)
    }
  });

  stdin.on('data', (key) => {   // Ctrl + c
    if (key === 'b') {
      stdout.write('\x07')
    }
  });

  stdin.on('data', (key) => {   // Ctrl + c
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!');
      setTimeout(() => process.exit(), 1000);
    }
  });
};

interactiveTimer(process.stdin)