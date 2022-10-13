//Read a Number and Display the week day (Sunday, Monday,...)

const prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter a number between 1 and 7 : "));

switch (day) {
    case 0: 
        console.log("The day is : Sunday");
        break;
    
    case 1: 
        console.log("The day is : Monday");
        break;
    
    case 2: 
        console.log("The day is : Tuesday");
        break;
    
    case 3: 
        console.log("The day is : Wednesday");
        break;
    
    case 4: 
        console.log("The day is : Thursday");
        break;
    
    case 5: 
        console.log("The day is : Friday");
        break;
    
    case 6: 
        console.log("The day is : Saturday");
        break;
    
    default: 
        console.log("Invalid day");
        break;
}