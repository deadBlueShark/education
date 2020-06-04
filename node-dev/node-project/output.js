var questions = [
  "What is your name?",
  "What is your favorite book?",
  "What is your preferred programming language?"
]

var answers = []


function ask(index) {
  process.stdout.write(questions[index] + '\n');  
}

process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

ask(0);

process.on('exit', () => {
  process.stdout.write("\n");
  process.stdout.write(answers + "\n");
});
