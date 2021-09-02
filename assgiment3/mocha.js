"use strict";
const assert = require("assert");

const funcitonModule = require("./functions.js");

const isVowel = funcitonModule.isVowel;
const computeSalesCommission = funcitonModule.computeSalesCommission;
const compoundInterest = funcitonModule.compoundInterest;
const calcDownPayment = funcitonModule.calcDownPayment;
const convertFahrenheit = funcitonModule.convertFahrenheit;
const calcDistance = funcitonModule.calcDistance;

// Question 1

describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
  });

  //Question 2

  describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
  });

// Question 3

describe("test of compoundInterest", function () {
    it("tests initial 100 and rate 10 and time 1", function () {
      assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
    });
    it("tests initial 10000 and rate 5 and time 10", function () {
      assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
  });
  
// Question 4 A

describe("test of calcDownPayment", function () {
    it(" calculate price of downpayment 40000", function () {
      assert.strictEqual(calcDownPayment(40000), 2000);
    });
    it(" calculate price of downpayment 50000", function () {
      assert.strictEqual(calcDownPayment(50000), 2500);
    });
    it(" calculate price of downpayment 100000", function () {
      assert.strictEqual(calcDownPayment(100000), 7500);
    });
    it(" calculate price of downpayment 200000", function () {
      assert.strictEqual(calcDownPayment(200000), 5000);
    });
  });

// Question 4 B

describe("test convertFahrenheit", function () {
    it("tests fahrenheit 32", function () {
      assert.strictEqual(convertFahrenheit(32), 0);
    });
    it("tests fahrenheit 32", function () {
      assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
    });
    it("tests fahrenheit 32", function () {
      assert.strictEqual(convertFahrenheit(212), 100);
    });
    it("tests fahrenheit 32", function () {
      assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
    });
  });
 // Question 4 C  

 describe("test calcDistance", function () {
    it("tests distance 0,0,5,5", function () {
      assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
    });
  });
  