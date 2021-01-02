'use strict';

const user = 'yourname';
let firstChoice = '';
let secondChoice = '';
let thirdChoice = '';
const choices = [
  'watch TV for an hour',
  'nap for an hour',
  'take a short walk',
  'catch up on news',
  'chat with a friend',
  'listen to music'
];

const choose = () => choices[Math.floor(Math.random() * choices.length)];

firstChoice = choose();
secondChoice = choose();
thirdChoice = choose();
while (secondChoice === firstChoice) {
  secondChoice = choose();
}
while (thirdChoice === firstChoice || thirdChoice === secondChoice) {
  thirdChoice = choose();
}

const selections = {
  user: user,
  'first-choice': firstChoice,
  'second-choice': secondChoice,
  'third-choice': thirdChoice,
};

for (const key of Object.keys(selections)) {
    console.log(`${key}: ${selections[key]}`);
}
