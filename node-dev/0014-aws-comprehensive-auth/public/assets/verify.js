// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:b0d8aa6f-e838-4ba2-ba9f-a50287af9a33',
});

let lambda = new AWS.Lambda();
let result = document.getElementById('result');

function getUrlParams() {
  let p = {};
  let match;
  let pl     = /\+/g;
  let search = /([^&=]+)=?([^&]*)/g;
  let query  = window.location.search.substring(1);

  let decode = function (s) {
    return decodeURIComponent(s.replace(pl, " "));
  }

  while (match = search.exec(query)) {
    p[decode(match[1])] = decode(match[2]);
  }

  return p;
}

function init() {
  let urlParams = getUrlParams();

  if (!('email' in urlParams) || !('verify' in urlParams)) {
    result.innerHTML = 'Please specify email and verify token in the URL.';
  } else {
    result.innerHTML = 'Verifying...';
    let input = {
      email: urlParams['email'],
      verify: urlParams['verify']
    };

    lambda.invoke({
      FunctionName: 'sampleAuthVerifyUser',
      Payload: JSON.stringify(input)
    }, function(err, data) {
      if (err) console.log(err, err.stack);
      else {
        var output = JSON.parse(data.Payload);
        if (output.verified) {
          result.innerHTML = 'User ' + input.email + ' has been Verified, thanks!';
        } else {
          result.innerHTML = 'User ' + input.email + ' has not been Verified, sorry.';
        }
      }
    });
  }
}

window.onload = init();
