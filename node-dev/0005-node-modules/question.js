const collect = require('./lib/collect-answer');

const questions = [
  'Where are you from?',
  'What is your biggest hobby?',
  'What genre of film do you like?'
]

collect.collectAnswers(questions, answers => {
  console.log(`\nYour answers: ${answers.join(' - ')}`);
  process.exit();
})

