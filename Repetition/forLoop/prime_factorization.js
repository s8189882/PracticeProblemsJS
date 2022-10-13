// Write a program to compute Factors of a number N 
// using prime factorization method. 
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

const prompt = require("prompt-sync")();
let number = prompt("Enter a number : ");
console.log("The Prime Factors of " + number + " is/are : ");

while (number % 2 == 0) {
    console.log(2 + " ");
    number /= 2;
}

for (let index = 3; index <= Math.sqrt(number); index += 2)
{
    while (number % index == 0) {
        console.log(index + " ");
        number /= index;
    }
}
if (number > 2)
    console.log(number);