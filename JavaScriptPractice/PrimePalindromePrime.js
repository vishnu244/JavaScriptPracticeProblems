const prompt = require("prompt-sync")();
var number = prompt("Please enter the number :");
let count=0;
var OutputOfpalindrome =0;
function Palindrome(number){
    let rem, temp, final = 0;
    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }
    if(final == temp){
        console.log("Number is Palindrome");
        OutputOfpalindrome = final;
    }
    else{
        console.log("Number is not Palindrome!");
    }	
}
//Palindrome(number);
function PrimePalindrome(number) {
    if( number==0 || number==1 )
    {
        console.log("Given number is neither prime nor Composite");
    }
    for(let i = 2;i<number;i++)
    {
        if((number%i) == 0){
            count++;
        }
    }
    if(count == 0){
        console.log("Number is Prime");
        Palindrome(number);
        Prime(OutputOfpalindrome);
    }
    else{
        console.log("Number is not Prime!");
        Palindrome(number);
        Prime(OutputOfpalindrome);
    }
  }
//Palindrome(number);
function Prime(number) {
    if( number==0 || number==1 )
    {
        console.log("Given number is neither prime nor Composite");
    }
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
  
 PrimePalindrome(number);