// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-southeast-1:17e83a37-713c-47a0-9012-31cd185075d7'
});

let lambda = new AWS.Lambda();
function makeGreeting () {
  let submitButton = document.getElementById('submit-button');
  submitButton.disabled = true;

  let nameInput = document.getElementById('name');
  let input = nameInput.value ? { name: nameInput.value } : {};

  console.log(input);
  lambda.invoke({
    FunctionName: 'serverlessInAction',
    Payload: JSON.stringify(input)
  }, (err, data) => {
    let result = document.getElementById('result');
    if (err) {
      console.log(err, err.stack);
      result.innerHTML = err;
    } else {
      let output = JSON.parse(data.Payload);
      result.innerHTML = output.body;
    }
    submitButton.disabled = false;
  });
}

var form = document.getElementById('greet-form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  makeGreeting();
});
