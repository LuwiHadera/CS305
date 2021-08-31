const prompt = require("prompt-sync")();

let cost = prompt("enter the house price: ");

function calculateDownPayment(price) {
  if (price >= 0 && price < 50000) {
    return (price * 5) / 100;
  } else if (price >= 50000 && price < 100000) {
    let rate = price - 50000;
    return 1000 + (rate * 10) / 100;
  } else if (price >= 100000 && price < 200000) {
    let rate2 = price - 100000;
    return 2000 + (rate2 * 15) / 100;
  } else if (price >= 200000) {
    let rate3 = price - 200000;
    return 5000 + (rate3 * 10) / 100;
  }
}

console.log(calculateDownPayment(cost));
