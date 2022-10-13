//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. 
//A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.

const prompt = require('prompt-sync')();
let year = prompt("Enter Year : ");
let yearToCheck = parseInt(year);
let isLeapYear = false;

if ((yearToCheck % 4 == 0 && yearToCheck % 100 == 0) || yearToCheck % 4 == 0) {
	isLeapYear = true;
} else {
	isLeapYear = false;
}

console.log(yearToCheck + " is a leap year ? " + isLeapYear);