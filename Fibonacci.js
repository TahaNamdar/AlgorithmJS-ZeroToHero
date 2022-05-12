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
fib1(5);
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
  return new Array(n).fill(1).reduce((arr, _, i) => {
    arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
    return arr;
  }, []);
}
console.log(fib3(5));
