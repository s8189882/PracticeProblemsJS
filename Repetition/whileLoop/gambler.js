// Write a Program where a gambler starts with Rs 100 and places Re 1 bet 
// until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. 
// Keeps track of number of times won and number of bets made.

const won = 200;
const lost = 0;

let currentMoney = 100, count = 0, winCount = 0, loseCount = 0;

while (currentMoney < won && lost < currentMoney) {
    let bet = Math.floor(Math.random() * 2);
    if (bet == 1) {
        currentMoney++;
        winCount++;
    }
    else {
        currentMoney--;
        loseCount++;
    }
    count++;
}
console.log("Number of WINs : " + winCount +  "\nNumber of LOSSes : " + loseCount + "\nTotal Bets made by gambler : " + count);
if (currentMoney == 200) {
    console.log("Gambler Won the Match! \nBalance Amount With The Gambler = " + currentMoney);
}
else {
    console.log("Gambler Lost the Match! \nBalance Amount With The Gambler = " + currentMoney);
}