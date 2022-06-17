const prompt = require("prompt-sync")();
var number = prompt("Please enter the number between 1 to 7 :");
/*
if (number == 1) {
    console.log("Monday"); 
} 
else if (number == 2){
    console.log("Tuesday");
}
else if (number == 3) {
    console.log("Wednesday"); 
} 
else if (number == 4){
    console.log("Thursday");
}
else if (number == 5) {
    console.log("Friday"); 
} 
else if (number == 6){
    console.log("Saturday");
}
else{
    console.log("Sunday"); 
} 
*/
switch(number)
{
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    
    default :
        console.log("wrong Input");
}
