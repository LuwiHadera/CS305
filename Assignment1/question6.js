const prompt = require("prompt-sync")();

let num = parseInt(prompt("enter your number: "));

function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    let reminder = num % 10;
    sum = sum + reminder;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumDigits(num));
