// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const prompt = require("prompt-sync")();

let start = 0, guessNumber = 0, found = 0, end = 100;
console.log("Think of a number between 1 and 100");

while (start <= end && found != 1) {
    let middle = Math.round(start + (end - start) / 2);
    console.log("Enter 1 if this is your number " + middle);
    console.log("Enter 2 if your number is less than " + middle);
    console.log("Enter 3 if your number is more than " + middle);
    let choice = prompt("Enter Your Choice : ");
    switch (choice) {
        case "1":
            guessNumber = middle;
            found = 1;
            break;
        case "2":
            end = middle - 1;
            break;
        case "3":
            start = middle + 1;
            break;
    }
}
if (found == 1) {
    console.log("-------------------");
    console.log("Your number is " + guessNumber);
    console.log("-------------------");
}