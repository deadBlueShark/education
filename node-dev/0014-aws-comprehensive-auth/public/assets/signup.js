// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:b0d8aa6f-e838-4ba2-ba9f-a50287af9a33',
});
let lambda = new AWS.Lambda();
function signup() {
  let result = document.getElementById('result');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let verifyPassword = document.getElementById('verify-password');

  if (!email.value) {
    result.innerHTML = 'Please specify your email address.';
  } else if (!password.value) {
    result.innerHTML = 'Please specify a password.';
  } else if (password.value != verifyPassword.value) {
    result.innerHTML = 'Passwords are different, please check again.';
  } else {
    let input = { email: email.value, password: password.value };

    lambda.invoke({
      FunctionName: 'sampleAuthCreateUser',
      Payload: JSON.stringify(input)
    }, function(err, data) {
      if (err) return console.log(err, err.stack);

      let output = JSON.parse(data.Payload);
      if (output.created) {
        result.innerHTML = 'User ' + input.email + ' created. Please check your email to validate the user and enable login.';
      } else {
        result.innerHTML = 'User not created.';
      }
    });
  }
}

let form = document.getElementById('signup-form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  signup();
});
