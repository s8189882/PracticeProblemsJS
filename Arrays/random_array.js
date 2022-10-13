
let randomNumberArr = new Array();
const upperLimit = 899;
const lowerLimit = 100;

for (let index = 0 ; index < 10 ; index++){
    randomNumberArr.push(Math.round((Math.random() * upperLimit) + lowerLimit));
}
console.log("Randomly Generated Array :")
console.log(randomNumberArr);

let largestNumber = 0;
let secondLargestNumber = 0;
let smallestNumber = 10000;
let secondSmallestNumber = 10000;

for(index = 0 ; index < randomNumberArr.length ; index ++){
    if(randomNumberArr[index] > largestNumber)
        largestNumber = randomNumberArr[index];

    if(randomNumberArr[index] < smallestNumber)
        smallestNumber = randomNumberArr[index];
}





for(index = 0 ; index < randomNumberArr.length ; index ++){
    if(randomNumberArr[index] > secondLargestNumber && randomNumberArr[index] < largestNumber)
        secondLargestNumber = randomNumberArr[index]; 

    if(randomNumberArr[index] < secondSmallestNumber && randomNumberArr[index] > smallestNumber)
        secondSmallestNumber = randomNumberArr[index];
}

console.log("Second Largest Element : " + secondLargestNumber);
console.log("Second Smallest Element : " + secondSmallestNumber);