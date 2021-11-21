

const timer = process.argv.forEach(function (value) {

  //if there is no user input
  if (value === null){
    return null;
  }

  //if the input > 0, and if the input is a Number
  if (value > 0 && Number.isInteger(parseInt(value))) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(value)
    }, value * 1000) 
  }
});

//modules.exports = timer;

//feedback
/*
  values in a variable (input)
  start look after first 2 elements to avoid extra computation
  more functions

*/