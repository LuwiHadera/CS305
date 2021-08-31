const prompt = require("prompt-sync")();

let initialAmount = parseFloat(prompt("enter your initial Amount: "));
let interestRate = parseFloat(prompt("enter your interest rate: "));
let numberOfYears = parseFloat(prompt("enter your number of years to compound: "));

function compoundInterest(amount, interest, time){
    let CI = Math.pow(amount * (1 + (interest/12)), 12/time)  - amount;
    return CI
}

console.log(compoundInterest(initialAmount,interestRate,numberOfYears))