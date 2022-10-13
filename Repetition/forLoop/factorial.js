// Write a program that computes a factorial of a number taken as input. 
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");

let factorial = 1;
for(let index = 1; index <= number; index++)
{
    factorial *= index;
}
console.log("Factorial of " + number + " is : " + factorial);