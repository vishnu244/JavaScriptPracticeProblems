const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");
let a=0;
let b=1;
console.log(a+"\n"+b);
function FibonacciSeries(number) {
    for(let i = 0;i<=number;i++)
    {
        let c = a+b;
        console.log(c);
        a=b;
        b=c;
    }
  }
  FibonacciSeries(number);