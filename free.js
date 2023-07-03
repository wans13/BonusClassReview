function declareFruits() {
  return ["apple", "banana", "pear", "peach"];
}
console.log(declareFruits());

function getThirdElement(numbers) {
  return numbers[2];
}
console.log(getThirdElement([4, 5, 6, 7, 8]));

function getArrayLength(array) {
  return array.length;
}
console.log(getArrayLength(["apple", "banana", "pear", "peach"]));

function addElement(array, element) {
  array.push(element);
  return array;
}
console.log(addElement(["apple", "banana"], "pear"));

function removeLastElement(array) {
  array.pop();
  return array;
}
console.log(removeLastElement(["apple", "banana", "pear"]));

function printEachNumber(numbers) {
  numbers.forEach(function (number) {
    console.log(number);
  });
}
printEachNumber([4, 5, 6, 7, 8]);

function squareNumbers(numbers) {
  const squaredNumbers = numbers.map(function (number) {
    number = number * number;
    return number;
  });
  return squaredNumbers;
}
console.log(squareNumbers([1, 2, 3, 4, 5]));

function evenFilter(thing) {
  return thing !== undefined;
}
function getEvenNumbers(numbers) {
  const evenNumbers = numbers.map(function (number) {
    if (number % 2 == 0) {
      return number;
    }
  });
  return evenNumbers.filter(evenFilter);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5]));

function getSum(numbers) {
  let sum = 0;
  numbers.forEach(function (n) {
    sum = sum + n;
  });
  return sum;
}
console.log(getSum([1, 2, 3, 4, 5]));

function greaterThanTen(n) {
  return n > 10;
}
function findFirstGreaterThanTen(numbers) {
  const n = numbers.find(greaterThanTen);
  return n;
}
console.log(findFirstGreaterThanTen([1, 2, 3, 4, 15, 6, 20, 7]));

function sumMatrix(matrix) {
  let sum = 0;
  matrix.forEach(function (array) {
    array.forEach(function (n) {
      sum = sum + n;
      return sum;
    });
    return sum;
  });
  return sum;
}
console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function sortDescending(numbers) {
  numbers.sort();
  numbers.reverse();
  return numbers;
}
console.log(sortDescending([1, 5, 2, 8, 3]));

function getTopScorerName(students) {
  const scores = students.map(function (student) {
    return student.score;
  });
  let n = 0;
  scores.forEach(function (score) {
    if (score > n) {
      n = score;
      return n;
    }
    return n;
  });
  const highScoreIndex = scores.indexOf(n);
  return students[highScoreIndex].name;
}
console.log(
  getTopScorerName([
    { name: "John", score: 85 },
    { name: "Sara", score: 95 },
    { name: "Bob", score: 90 },
  ])
);
