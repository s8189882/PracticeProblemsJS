// Unit Conversion 
// a. 1ft=12inthen42in=?ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres

console.log("Convert inches to feet");
console.log("1 ft = 12 inches");
let valueInFeet = 42 / 12;
console.log("42 inches in feet: " + valueInFeet + " ft");

console.log("");


console.log("Convert feet in meter square");
let rectangleArea = 60 * 40;
console.log("Area of Plot in feet : " + rectangleArea + "ft");
console.log("1 ft = 0.3048 meter");
let rectangleAreaInMeter = rectangleArea * 0.3048;
console.log("Therefore " + rectangleArea + "msq : " + rectangleAreaInMeter + " msq");

console.log("");

console.log("Convert meter square to acre");
let totalAreaInFeet = rectangleArea * 25;
console.log("Area of 25 Plot in feet : " + totalAreaInFeet + " ft");
let totalAreaInMeters = rectangleAreaInMeter * 25;
console.log("Area of 25 Plot in meter square : " + totalAreaInMeters + " square meters");
console.log("1 acre = 4046.86 meter square");
console.log("Area of 25 Plot in acre : " + (totalAreaInMeters/4046.86) + " acres");
