function calculateSalesCommision(salaried, sale) {
  if (salaried) {
    if (sale < 300) {
      return 0;
    } else if (sale >= 300 && sale <= 500) {
      return sale * (1 / 100);
    } else if (sale > 500) {
      return sale * (2 / 100);
    }
  } else
  if (sale >= 300 && sale <= 500) {
    return sale * (2 / 100);
  } else if (sale > 500) {
    return sale * (3 / 100);
  } else if (sale < 300) {
    return 0;
  }
}

console.log(calculateSalesCommision(true, 200));
console.log(calculateSalesCommision(false,200));
console.log(calculateSalesCommision(true,300));
console.log(calculateSalesCommision(false,300));
console.log(calculateSalesCommision(true,3500));
console.log(calculateSalesCommision(false,3500));