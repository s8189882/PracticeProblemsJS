// Write a program that takes a command-line argument n and 
// prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

const prompt = require("prompt-sync")();
let number = prompt("Enter The Range : ");

let upperLimit = Math.pow(2, number);
let value = 1;
let power = 1;
while((power <= upperLimit) && (value <= upperLimit) && (value < 256)) {
    value *= 2;
    console.log("2 ^ " + power + " = " + value);
    power++;
}