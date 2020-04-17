/*
Three doors
Two goats
1 Gold

Pick one door
Host reveals other door which is a goat
You get choice to stick or switch
Open door and get prize


*/

"use strict";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var doorArray = [true, false, false]; // true = gold, false = goat
shuffle(doorArray);

var choice;

console.log(
  `  There are three doors to choose from: 
  1, 2 or 3. 
  After you choose one, I will open another door to reveal a goat. 
  You will then be given the choice to Stick() or Switch() your choice.
  Begin with guess(doorNumber), either 1, 2 or 3.`
);

function guess(num) {
  // console.log(doorArray);
  var index = num - 1; // 1
  console.error(`You have chosen door number ${num}`);
  choice = doorArray[index]; // false
  var switchOption = choice === true ? false : true;
  console.log(`I have removed a goat. Would you like to Stick() or Switch()?`);

  if (switchOption) {
    // console.log(`(The alternative choice is a GOLD)`);
  } else {
    // console.log(`(The alternative choice is a goat)`);
  }
}

function Stick() {
  return choice ? "You won GOLD!" : "You won a goat...";
}

function Switch() {
  return !choice ? "You won GOLD!" : "You won a goat...";
}

guess(1);
