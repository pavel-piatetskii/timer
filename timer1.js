// 
const timer = function() {
  process.argv.slice(2)
  .map(elm => Number(elm))
  .filter(elm => !isNaN(elm) && elm >= 0 )
  .sort((a, b) => a - b)
  .forEach(seconds => 
    setTimeout(() => 
      process.stdout.write('\x07'), seconds * 1000
    )
  );
};

timer();