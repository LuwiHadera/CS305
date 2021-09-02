"use strict";
const assert = require("assert");
/**
 * 
 * @param {number} price price of house 
 * @returns {number} downpayment expected to be paid
 */
function calcDownPayment(price) {
  if (price >= 0 && price < 50000) {
    return (price * 5) / 100;
  } else if (price >= 50000 && price < 100000) {
    let rate = price - 50000;
    return 2500 + (rate * 10) / 100;
  } else if (price >= 100000 && price < 200000) {
    let rate2 = price - 100000;
    return 7500 + (rate2 * 15) / 100;
  } else if (price >= 200000) {
    let rate3 = price - 200000;
    return 5000 + (rate3 * 10) / 100;
  }
}

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

// B:
/**
 * 
 * @param {number} farenheit degree farenheit from user
 * @returns {number} degree celcius after converted 
 */
function convertFahrenheit(farenheit) {
  let celcius = ((farenheit - 32) * 5) / 9;
  return celcius;
}

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

// C;
/**
 * 
 * @param {number} x1coords x1 Coordinate  
 * @param {number} y1coords y1 Coordinate
 * @param {number} x2coords x2 Coordinate
 * @param {number} y2coords y2 Coordinate
 * @returns {number} the distance between those coordinates
 */
function calcDistance(x1coords, y1coords, x2coords, y2coords) {
  let distance = Math.sqrt((x2coords - x1coords) * (x2coords - x1coords) + (y1coords - y1coords) * (y2coords - y1coords));
  return distance;
}
console.log(calcDistance(0, 0, 5, 5));

describe("test calcDistance", function () {
  it("tests distance 0,0,5,5", function () {
    assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
  });
});
