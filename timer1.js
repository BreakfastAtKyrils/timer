

process.argv.forEach(function (value) {
  
  if (value > 0 && Number.isInteger(parseInt(value))) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, value * 1000) 
  }
});