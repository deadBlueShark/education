"use strict";

const user = 'yourname';
let firstChoice;
let secondChoice;
let thirdChoice;
const choices = new Array(
  'watch TV for an hour',
  'nap for an hour',
  'take a short walk',
  'catch up on news',
  'chat with a friend',
  'listen to music'
);
const selections = new Object();

const choose = () => choices[Math.floor(Math.random() * choices.length)];

firstChoice = secondChoice = thirdChoice = "";

firstChoice = choose();
secondChoice = choose();
thirdChoice = choose();
while (secondChoice === firstChoice) {
  secondChoice = choose();
}
while ((thirdChoice === firstChoice) ||
       (thirdChoice === secondChoice)) {
  thirdChoice = choose();
}

selections['user'] = user;
selections['first-choice'] = firstChoice;
selections['second-choice'] = secondChoice;
selections['third-choice'] = thirdChoice;

for (const key of Object.keys(selections)) {
    console.log(`${key}: ${selections[key]}`);
}
