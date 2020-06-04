process.stdout.write('Hello World\n');
process.stdout.write("I'm Le Chi Nguyen\n\n");

const questions = [
  'What is your name?',
  'How old are you?',
  'What is your job?',
  'What is your preferred programming language?'
]

let ask = (index) => {
  process.stdout.write(`${questions[index]}\n>`);
}

let answers = [];
let questionLength = questions.length;
let i = 0;
ask(i);
process.stdin.on('data', data => {
  answers.push(data.toString().trim());
  answers.length < questionLength ? ask(++i) : process.exit();
})

process.on('exit', () => {
  process.stdout.write(`Your answers: ${answers.join(' - ')}\n`);
})
