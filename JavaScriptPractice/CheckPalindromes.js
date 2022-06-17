const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");
var number2 = prompt("Please enter the number :");

function Palindrome(number,number2){
    let rem, temp, final = 0;
    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }
    if(final == temp && final == number2 ){
        console.log("Number is Palindrome");
    }
    else{
        console.log("Number is not Palindrome!");
    }	
}
Palindrome(number,number2);