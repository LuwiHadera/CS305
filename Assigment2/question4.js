 // one
 function sum(num){
     let sum = 0;
     while(num > 0){
         let reminder = num % 10;
         sum = sum + reminder;
         num = Math.floor(num / 10);
     }
     return sum;
 }
console.log(sum(1234));
console.log(sum(102));
console.log(sum(8));
 
 // two
 function multipcation(num){
    let multi = 1;
    while(num > 1){
        let reminder = num % 10;
        multi = (multi) * reminder;
        num = Math.floor (num / 10);
      
    }
    return multi;
 }
 console.log(multipcation(1234));
 console.log(multipcation(102));
 console.log(multipcation(8));

