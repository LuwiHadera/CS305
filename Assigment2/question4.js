 // one
 function sumDigits(num){
     let sum = 0;
     while(num > 0){
         let reminder = num % 10;
         sum = sum + reminder;
         num = Math.floor(num / 10);
     }
     return sum;
 }
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));
 
 // two
 function multipcationDigits(num){
    let multi = 1;
    while(num > 1){
        let reminder = num % 10;
        multi = (multi) * reminder;
        num = Math.floor (num / 10);
      
    }
    return multi;
 }
 console.log(multipcationDigits(1234));
 console.log(multipcationDigits(102));
 console.log(multipcationDigits(8));

