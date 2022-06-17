const prompt = require("prompt-sync")();
var number = prompt("Please enter the number between 1 to 10000000 :");
if (number == 1) {
    console.log("One"); 
} 
else if (number == 10){
    console.log("Ten");
}
else if (number == 100) {
    console.log("Hundred"); 
} 
else if (number == 1000){
    console.log("Thousand");
}
else if (number == 10000) {
    console.log("Ten Thousand"); 
} 
else if (number == 100000){
    console.log("One Lakh");
}
else if (number == 1000000){
    console.log("Ten Lakhs");
}
else if (number == 10000000){
    console.log("One Crore");
}