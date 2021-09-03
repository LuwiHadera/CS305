"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = {
  maxOfThree,
  sum,
  multiply,
  longestWord,
  reverseArray,
  scoreExam,
  reverseArrayInPlace,
}; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if ((b > a && b > c) || b === a || b === c) {
    return b;
  } else if ((c > a && c > b) || c === a || c === b) {
    return c;
  } else {
    return "not valid";
  }
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */

function sum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr2) {
  let multi = 1;
  for (let j = 0; j < arr2.length; j++) {
    multi *= arr2[j];
  }
  return multi;
}

/**
 *
 * @param {Array} word array of strings
 * @returns {number} the longest word in the given array
 */

function longestWord(word) {
  let largest = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > largest.length) {
      largest = word[i];
    }
  }
  return largest.length;
}

/**
 *
 * @param {Array} arr array of number
 * @returns {Array} reverse the original array without modifying the input array
 */

function reverseArray(arr) {
  let newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
  }
  return newArr;
}

/**
 *
 * @param {Array} arr string of array
 * @returns {Array} returns the reversed version of original array and modify it too
 */

function reverseArrayInPlace(arr) {
  let length = Math.floor(arr.length / 2);
  for (let i = 0; i < length; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

/**
 *
 * @param {Array} studentAnswers array of numbers for correct answer
 * @param {Array} correctAnswers array of numbers nested inside array (matrix) that tell student answer
 * @returns {Array}  return the correct answers made by the student
 */

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
