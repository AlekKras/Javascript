//Task: Return the factorial of the provided integer

//solution #1

function factorialize(num) {
if (num===0 || num ===1){
  return 1;
}
  else {
    return num*factorialize(num-1);
  }
}

factorialize(4);

//solution #2

function factorialize(num) {
  var factorial = 1;
  for (var n = 2; n <= num; n++) {
    factorial = factorial * n;
  }

  return factorial;
}

factorialize(4);
