"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests


// one A:
function sumTo(num) {
    if (num === 0) return 0;
  
    return num + sumTo(num - 1);
  }
  
  
  
  // one B:
  
  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
  
  
  //one C
  
  function fibonacci(num) {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  
  
// two A:

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function outputListLoop(list){
      let x = list

      do{(x.value)
        return x = x.next}
       
      while(x)
      
  }
 

//recursion

function outputList(list){
    console.log(list.value)
    if(list.next){
        outputList(list.next)
    }
}
// outputList(list)

// one E:

function reverseList(list){
    if(list.next){ 
      reverseList(list.next)
    
    }
    console.log(list.value)
}
// reverseList(list)

//loop

function reverseListLoop(list) {
    let arr = [];
    let x = list;
  
    while (x) {
      arr.push(x.value);
      x = x.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
  // reverseListLoop(list);


