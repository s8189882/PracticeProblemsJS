//Write a program that takes a command-line argument n 
// and prints a table of the powers of 2 that are less than or equal to 2^n.

const prompt = require("prompt-sync")();
let number = prompt("Enter The Range : ");
let upperLimit = Math.pow(2, number);

let power = 1;
for (let index = 1; power <= upperLimit; index++) {
    if (power <= upperLimit) {
        power *= 2;
        console.log("2 ^ " + index + " = " + power);
    }
    else{
        break;
    }
}