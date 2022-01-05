//permutation
function permut(num) {
  let sum = 1;
  for (i = num; i > 0; i--) {
    sum *= i;
  }
  console.log(sum);
}
permut(5);

//Fibnocci Series

function fibonacciSeries(num) {
  let fibnocci = [];
  let a = 1,
    b = 0,
    c = 0;

  while (num > 0) {
    fibnocci.push(a);
    c = a;
    a += b;
    b = c;
    num--;
  }
  return fibnocci;
}

fibonacciSeries(8);