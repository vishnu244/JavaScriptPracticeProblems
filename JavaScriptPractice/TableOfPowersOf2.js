const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");
function PowerOf2(number) {
    for(let i = 0;i<number;i++)
    {
        let a = Math.pow(2,i);
        console.log("2 to the power "+ i +" is " + a);
    }
  }
  PowerOf2(number);