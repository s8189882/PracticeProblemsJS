//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt-sync')();
let digit = prompt("Enter a number like [1,10,100,1000....] : ");
digit = parseInt(digit);

if (digit == 1) {
    console.log("UNITS");
}
else if (digit == 10) {
    console.log("TENS");
} 
else if (digit == 100) {
    console.log("HUNDREDS");
} 
else if (digit == 1000) {
    console.log("THOUSANDS");
} 
else if (digit == 10000) {
    console.log("TEN THOUSANDS");
} 
else if (digit == 100000) {
    console.log("LAKHS");
} 
else if (digit == 1000000) {
    console.log("TEN LAKHS");
} 
else {
    console.log("Invalid Digit");
}