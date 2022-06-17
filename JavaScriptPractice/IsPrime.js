const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");

function Prime(number) {
    if( number==0 || number==1 )
    {
        console.log("Given number is neither prime nor Composite");
    }
    let count=0;
    for(let i = 2;i<number;i++)
    {
        if((number%i) == 0){
            count++;
        }
    }
    if(count == 0){
        console.log("Number is Prime");
    }
    else{
        console.log("Number is not Prime!");
    }
  }
  Prime(number);