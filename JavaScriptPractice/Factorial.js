const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");
let a=1;
function Factorial(number) {
    for(let i = 1;i<=number;i++)
    {
        a *= i;
    }
    console.log("Factorial of "+number+" is "+a);
  }
  Factorial(number);