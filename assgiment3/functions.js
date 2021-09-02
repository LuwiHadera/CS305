"use strict";

module.exports = {isVowel,computeSalesCommission,compoundInterest,calcDownPayment,convertFahrenheit,calcDistance};

// Question 1

/**
 * 
 * @param {string} character dispalyed input 
 * @returns {boolean} return true or false 
 */
 function isVowel(character) {
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
      return true;
    } else
      return false;
  }


// Question 2

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

// Question 3

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

// Question 4 A

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

// Question 4 B

/**
 * 
 * @param {number} farenheit degree farenheit from user
 * @returns {number} degree celcius after converted 
 */
 function convertFahrenheit(farenheit) {
    let celcius = ((farenheit - 32) * 5) / 9;
    return celcius;
  }

// Question 4 C  

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




