// Extend the program to take a range of number as input and 
// output the Prime Numbers in that range.

const prompt = require("prompt-sync")();

const lowerLimit = parseInt(prompt('Enter lowest number: '));
const upperLimit = parseInt(prompt('Enter highest number: '));

console.log("The prime numbers between " + lowerLimit + " and "  + upperLimit + " are:");

for (let index = lowerLimit; index <= upperLimit; index++) {
    let flag = 0;

    for (let divisor = 2; divisor < index; divisor++) {
        if (index % divisor == 0) {
            flag = 1;
            break;
        }
    }
    
    if (index > 1 && flag == 0) {
        console.log(index + " is a prime number");
    }
}