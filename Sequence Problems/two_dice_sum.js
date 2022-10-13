//Add two Random Dice Number and Print the Result

function getDiceValue() {
    return Math.floor(Math.random() * 6 + 1)
}

let dice1 = getDiceValue()
console.log(dice1)
let dice2 = getDiceValue()
console.log(dice2)
console.log("Sum of the dices : "+ (dice1 + dice2))