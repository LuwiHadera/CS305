const prompt = require("prompt-sync")();
let salaryKind = prompt("what is your salary type: ");
let sale = +prompt("enter the amount of sale: ");

function calculateSales(salaryType, sale) {
  if (salaryType === "salaried") {
    if (sale <= 300) {
      return "No commision";
    } else if (sale > 300 && sale < 500) {
      return sale * (1 / 100);
    } else if (sale >= 500) {
      return sale * (2 / 100);
    }
  } else{
    if (sale > 300 && sale < 500) {
      return sale * (2 / 100);
    } else if (sale >= 500) {
      return sale * (3 / 100);
    }
  }
}

console.log(calculateSales(salaryKind, sale))