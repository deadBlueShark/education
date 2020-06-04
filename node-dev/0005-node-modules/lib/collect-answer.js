const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let collectAnswers = (questions, doneCallback) => {
  let answers = [];

  let [firstQuestion] = questions;

  let answerQuestion = (answer) => {
    answers.push(answer);

    if (answers.length < questions.length) {
      rl.question(`${questions[answers.length]} `, answerQuestion);
    } else {
      doneCallback(answers);
    }
  }
  rl.question(`${firstQuestion} `, answerQuestion);
}

module.exports = { collectAnswers };
