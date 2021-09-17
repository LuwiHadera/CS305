// function sayHello() {
//     return "Hello, ";
//  }

const { userInfo } = require("os")
const { serialize } = require("v8")

// const { countReset } = require("console");



//  function greeting(helloMessage, name) {



//    console.log(helloMessage() + name);
//  }
//  // Pass `sayHello` as an argument to `greeting` function
//  greeting(sayHello, "JavaScript!");
//  // Hello, JavaScript!

// let x = 1;

// function func() {
//     let x = 2;
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
  
// }

// console.log(func());
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
     function shooter() { 
       console.log( i ); 

        shooters.push(shooter); 
        i++;
      };
     
    }
  
   
    return shooters;
  }
  
  let army = makeArmy();
  console.log(army())