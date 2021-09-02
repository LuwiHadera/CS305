"use strict";
const assert = require("assert");
/**
 * function calculates compound interest.
 * @param {Number} intitial the saved amount.
 * @param {Number} rate interest rate.
 * @param {Number} time number of years. 
 * @returns{Number} returns calculated compund interest.
 */
function compoundInterest(intitial, rate, time) {
  let comInterest = intitial *  Math.pow(((1 +(rate / 100)/12)) , (12 * time));
  return comInterest;
}

describe("test of compoundInterest", function () {
  it("tests initial 100 and rate 10 and time 1", function () {
    assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
  });
  it("tests initial 10000 and rate 5 and time 10", function () {
    assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
  });
});
