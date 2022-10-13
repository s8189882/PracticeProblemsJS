//Read a single digit number and write the number in word using Case

const prompt = require('prompt-sync')();
let number = prompt('Enter Single Digit Number : ');
number = parseInt(number);

switch(number){
    case 1 :
        console.log("1 = ONE");
        break;
    case 2 : 
        console.log("2 = TWO");
        break;

    case 3 : 
        console.log("3 = THREE");
        break;

    case 4 : 
        console.log("4 = FOUR");
        break;

    case 5 : 
        console.log("5 = FIVE");
        break;

    case 6 :
        console.log("6 = SIX");
        break;

    case 7 :
        console.log("7 = SEVEN");
        break; 

    case 8 :
        console.log("8 = EIGHT");
        break; 

    case 9 : 
        console.log("9 = NINE");
        break;
    
    default :
    console.log("Invalid Number");

}