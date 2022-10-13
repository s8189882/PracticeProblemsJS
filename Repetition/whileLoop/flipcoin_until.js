//Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let heads = 0;
let tails = 0;

while (heads != 11 && tails != 11) {
    let coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        heads++;
    }
    else {
        tails++;
    }
}
if (heads > tails) {
    console.log("Head Wins!\nHeads Count : " + heads + "\nTails Count : "+ tails);
}
else {
    console.log("Tail Wins!\nHeads Count : " + heads + "\nTails Count : "+ tails);
}
