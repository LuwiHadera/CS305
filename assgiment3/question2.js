"use strict";
const assert = require("assert");
/**
 * 
 * @param {boolean} salaried checks if salaried.
 * @param {Number} sale sales.
 * @returns {boolean} returns true or false.
 */
function computeSalesCommission(salaried, sale) {
  if (salaried) {
    if (sale < 300) {
      return 0;
    } else if (sale >= 300 && sale <= 500) {
      return sale * (1 / 100);
    } else if (sale > 500) {
      return 5 + (sale - 500) * (2 / 100);
    }
  } else if (sale >= 300 && sale <= 500) {
    return sale * (2 / 100);
  } else if (sale > 500) {
    return 10 + (sale - 500) * (3 / 100);
  } else if (sale < 300) {
    return 0;
  }
}

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
