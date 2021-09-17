"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
    return arr.map((key) => key * 2);
}

function doubleAges(arr){

}

function filterEven(arr){
    return arr.filter((key) => key % 2 == 0);
}

function filterOver10(arr) {
    return arr.filter((key) => key.age > 10);
}

function findEvenNum(arr){
    return arr.find((key) => key % 2 == 0);
}

function findEvenAge(arr){
    return arr.find((key) => key.age % 2 == 0);
}