//1
function fib1(n) {
  let a = 0,
    b = 1,
    c;

  if (n >= 0) {
    console.log(a);
  }
  if (n >= 1) {
    console.log(b);
  }
  for (let i = 2; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

//2

function fib2(n) {
  let a = 0,
    b = 1;
  if (n >= 0) {
    console.log(a);
  }
  if (n >= 1) {
    console.log(b);
  }
  for (let i = 2; i < n; i++) {
    console.log(a + b);
    b = a + b;
    a = b - a;
  }
}

//3

function fib3(n) {
  fibonacciSeries = [0, 1];
  if (n <= 1) {
    console.log(fibonacciSeries[0]);
  }
  if (n == 2) {
    console.log(...fibonacciSeries);
  }
  if (n > 2) {
    for (let i = 1; i <= n - 2; i++) {
      fibonacciSeries.push(
        fibonacciSeries[fibonacciSeries.length - 1] +
          fibonacciSeries[fibonacciSeries.length - 2]
      );
    }
    console.log(...fibonacciSeries);
  }
}
//4
function fib4(n) {
  return new Array(n).fill(1).reduce((acc, _, current) => {
    acc.push(current <= 1 ? current : acc[current - 2] + acc[current - 1]);
    return acc;
  }, []);
}
console.log(fib4(10));

console.log("test");
