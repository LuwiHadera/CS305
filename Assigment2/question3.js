
function calcDownPayment(price){
    if(price >= 0 && price < 50000){
        return (price * 5) / 100;
    }else if(price >= 50000 && price < 100000){
        let rate = price - 50000;
        return 2500 + (rate * 10) / 100;

    }else if(price >= 100000 && price < 200000){
        let rate2 = price - 100000;
        return 7500 + (rate2 * 15) / 100;
    
    }else if(price >= 200000){
        let rate3 = price - 200000;
        return 5000 + (rate3 * 10) / 100;
    }
}

console.log(calcDownPayment(40000));
console.log(calcDownPayment(50000));
console.log(calcDownPayment(100000));
console.log(calcDownPayment(250000));



