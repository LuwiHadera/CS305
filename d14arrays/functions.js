

// Question 1

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return "not valid";
  }
}

//  console.log(maxOfThree(5,5,-1));

// Question 2

let arr1 = [2, 4, 6];
let arr2 = [2, 4, 6];

function sum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}
console.log(sum(arr1));

function multiply(arr2) {
  let multi = 1;
  for (let j = 0; j < arr2.length; j++) {
    multi *= arr2[j];
  }
  return multi;
}

// Question 3

let word1 = ["hello", "beautiful", "people", "polymorphism"];

function longestWord(word) {
  let largest = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > largest.length) {
      largest = word[i];
    }
  }
  return largest.length;
}


// Question 4

// A;
let arr = ["A", "B", "C"];

function reverseArray(arr) {
  let newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
  }
  return newArr;
}


// B;

let arr2 = ["A", "B", "C"];

function reverseArrayInPlace(arr) {
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[j] = arr[i];
    j++;
  }
  return arr;
}


// Question 5

const correctAnswers = [3, 1, 2, 4];
const studentAnswers = [
  [1, 5, 8, 2],
  [2, 1, 2, 2],
  [3, 1, 3, 4],
];


function scoreExam(studentAnswers, correctAnswers) {
  let result = [];

  for (let i = 0; i < studentAnswers.length; i++) {
    let count = 0;
    for (let j = 0; j < studentAnswers[i].length; j++) {
      if (correctAnswers[j] === studentAnswers[i][j]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
}

