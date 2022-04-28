//Question1;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

//Question2;

for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

//Question3;

function printEvenNumbers(number) {
  for (let i = 0; i <= number; i += 2) {
    console.log(i, "q3");
  }
}
//Question4;

function logEvenNumbers(num1, num2) {
  for (let i = num1; i <= num2; i += 2) {
    console.log(i, "q4");
  }
}

//Question5;

function printEvenOfArray(array) {
  const result = array.filter((num) => num % 2 == 0);
  console.log(result);
}

function logEvenOfArray(array) {
  array.forEach((num) => num % 2 === 0 && console.log(num));
}

//Question6;

function sumEvenOfArray(array) {
  const evenArray = array.filter((num) => num % 2 == 0);
  const total = evenArray.reduce((acc, current) => {
    return acc + current;
  });

  console.log(total);
}

//Question7;

function sumOddOfArray(array) {
  const oddArray = array.filter((num) => num % 2 !== 0);
  const total = oddArray.reduce((acc, current) => {
    return acc + current;
  });

  console.log(total);
}

//Question8;

function subtractionArrays(array1, array2) {
  const evenArray = array1.filter((num) => num % 2 === 0);
  const oddArray = array2.filter((num) => num % 2 !== 0);
  const totalEven = evenArray.reduce((acc, current) => {
    return acc + current;
  });
  const totalOdd = oddArray.reduce((acc, current) => {
    return acc + current;
  });

  const result = totalEven - totalOdd;

  console.log(Math.abs(result));
}

//Question9

function findMaxOfArray(array) {
  console.log(Math.max(...array));
}

//Question10
function findMinOfArray(array) {
  console.log(Math.min(...array));
}

//Question11;

let count = 0;

for (let j = 2; j <= 100; j++) {
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }

  if (count == 2) console.log(j);
  count = 0;
}

//Question12;

function findPrimeNumbers(array) {
  numArray = array.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(numArray);
}

//Question13;
function countOfOddEven(array) {
  const evenArray = array.filter((num) => num % 2 === 0);
  const oddArray = array.filter((num) => num % 2 !== 0);
  console.log(evenArray.length, oddArray.length);
}

//Question14;
const sumOfArray = (array) => {
  const sumValue = array.reduce((acc, current) => {
    return acc + current;
  });
  console.log(sumValue);
};

const myArray = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log(sum);

//Question15;
function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

//Question16;

function removeDuplicate(array) {
  let newArray = [...new Set(array)];
  console.log(newArray);
}

let array = ["A", "B", "A", "C", "B"];
let newArray = [];
array.forEach((item) => {
  if (!newArray.includes(item)) {
    newArray.push(item);
  }
});
