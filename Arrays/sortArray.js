let randomNumberArr = new Array();
const upperLimit = 899;
const lowerLimit = 100;

for (let index = 0 ; index < 10 ; index++){
    randomNumberArr.push(Math.round((Math.random() * upperLimit) + lowerLimit));
}
console.log("Randomly Generated Array :")
console.log(randomNumberArr);

randomNumberArr.sort();
console.log("Sorted Array :")
console.log(randomNumberArr);

console.log("Second Largest Element : " + randomNumberArr[randomNumberArr.length-2]);
console.log("Second Smallest Element : " + randomNumberArr[0+1]);