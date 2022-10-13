let primeFactorsArray = new Array();

const prompt = require("prompt-sync")();
let inputNumber = prompt("Enter the number : ");

for (let factor = 2; factor < inputNumber; factor++){
    if (inputNumber % factor == 0){
        checkPrime(factor);
    }
}

function checkPrime(validFactor){
    for (let index = 2; index < Math.sqrt(validFactor); index++){
        let flag = 0;
        if (validFactor % index == 0) {
            flag++;
            break;
        }
        if(flag == 0){
            primeFactorsArray.push(validFactor);
        }
    }
}

console.log("The Prime Factors for " + inputNumber + " is : ");
console.log(uniquePrimeFactorsArray);