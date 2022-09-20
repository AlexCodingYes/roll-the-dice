const prompt = require("prompt-sync")({sigint: true});

while(true){
let n = prompt("Enter the number of sides you want one of your dices: ")
console.log("Dice roll: " + Math.floor((Math.random() * n)+1));
}