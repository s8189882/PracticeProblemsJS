let count = 1;
let maximumCount = 1;
let minimumCount = 11;
let numberWithMaximumCount = 0;
let numberWithMinimumCount = 0;
let diceMap = new Map();

function rollDie() {
    let diceValue = Math.floor(Math.random() * 6 + 1);
    console.log("Rolled Dice : " + diceValue);
    return diceValue;
}

while (true) {
    let diceValue = rollDie();
    if (diceMap.has(diceValue)) {
        count = diceMap.get(diceValue) + 1;
    }
    diceMap.set(diceValue, count);
    if (count >= 10)
        break;
}

for ([key, value] of diceMap.entries()) {
    if (value > maximumCount) {
        maximumCount = value;
        numberWithMaximumCount = key;
    }
    if (value < minimumCount) {
        minimumCount = value;
        numberWithMinimumCount = key;
    }
}

console.log("\nDisplaying Dice Map : ");
console.log(diceMap);
console.log("\nNumber with Minimum Count : " + numberWithMinimumCount + "\nNumber with Maximum Count : " + numberWithMaximumCount);