for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}
for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

function evenNumbersFromZero(toNumber) {
  for (let i = 1; i <= toNumber; i = i + 2) {
    console.log(i);
  }
}

function getNumbers(from, to, isEven) {
  for (let i = from; i <= to; i++) {
    if (isEven && i % 2 === 0) {
      console.log(i);
    }
    if (!isEven && i % 2 !== 0) {
      console.log(i);
    }
  }
}

function getEvenOrOddNumbersFromArray(arrayOfNumbers, isEven) {
  if (isEven) {
    return arrayOfNumbers.filter((number) => number % 2 === 0);
  } else {
    return arrayOfNumbers.filter((number) => number % 2 !== 0);
  }
}

// getEvenOrOddNumbersFromArray([1, 2, 3, 4, 5, 56, 7, 8, , 9, 10], true);

function sumOfNumbers(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, current) => {
    return acc + current;
  }, 0);
}

function sumOfEvenNumbersFromArray(arrayOfNumber) {
  const arrayOfEvenNumbers = getEvenOrOddNumbersFromArray(arrayOfNumber, true);
  return sumOfNumbers(arrayOfEvenNumbers);
}

function sumOfOddNumbersFromArray(arrayOfNumber) {
  const arrayOfEvenNumbers = getEvenOrOddNumbersFromArray(arrayOfNumber, false);
  return sumOfNumbers(arrayOfEvenNumbers);
}

function subtractionArrays(arrayOfNumbers) {
  const sumOfEvenNumbers = sumOfEvenNumbersFromArray(arrayOfNumbers);
  const sumOfOddNumbers = sumOfOddNumbersFromArray(arrayOfNumbers);
  return Math.abs(sumOfEvenNumbers - sumOfOddNumbers);
}

function highestOrLowestNumberIndex(arrayOfNumbers, isHigh) {
  return Math[isHigh ? "max" : "min"](...arrayOfNumbers);
}

///@TODO Make It Better and Read about recursion
function findPrimeNumbers(arrayOfNumbers) {
  arrayOfNumbers.map((number) => {
    for (let i = number; i > 1; i--) {
      if (number % i !== 0) {
        return number;
      }
    }
  });
}

function doSearchPrime() {
  let count = 0;

  for (let a = 2; a <= 100; a++) {
    for (let i = 1; i <= a; i++) {
      if (a % i == 0) count++;
    }

    if (count == 2) console.log(a);
    count = 0;
  }
}

function findPrimeNumbers(array) {
  numArray = array.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(numArray);
}

function countOfEvenNumbers(arrayOfNumbers) {
  const evenNumbers = getEvenOrOddNumbersFromArray(arrayOfNumbers, true);
  const oddNumbers = getEvenOrOddNumbersFromArray(arrayOfNumbers, false);
  return {
    countOfEvenNumbers: evenNumbers.length,
    countOfOddNumbers: oddNumbers.length,
  };
}

// //@TODO do it with map loop
function generateNNumberSmallerThanM(N, M) {
  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(Math.random() * M);
  }
  return result;
}

//With Map loop ????

function reverseArray(arrayOfNumbers) {
  arrayOfNumbers.reduceRight((acc, current) => {
    acc = [...acc, current];
    return acc;
  }, []);
}

function removeDuplicates(arrayOfNumbers) {
  arrayOfNumbers.reduce((acc, current) => {
    const foundItem = acc.find((item) => item === current);
    if (foundItem) {
      return acc;
    }
    acc = [...acc, current];
    return acc;
  }, []);
}

function duplicateOccurance(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, current) => {
    return {
      ...acc,
      [current]: acc[current] ? acc[current] + 1 : 1,
    };
  }, {});
}
