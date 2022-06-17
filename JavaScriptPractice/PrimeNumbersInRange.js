const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");

function PrimeRange(number) {
    let count=0;

    for(let i = 2;i<number;i++)
    {
        for(let j=2;j<=i;j++)
        {
            if((i%j) == 0){
                count++;
            }
        }
        if(count == 0){
            console.log(i);
        } 
    }
}
function prime2(lowerNumber,higherNumber){
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
//prime2(2,100);
PrimeRange(number);