let crypto = require('crypto');

function computeHash(password, salt, fn) {
  let len = 512;
  let iterations = 4096;
  let digest = 'sha512';

  if (3 == arguments.length) {
    crypto.pbkdf2(password, salt, iterations, len, digest, (err, derivedKey) => {
      if (err) return fn(err);

      fn(null, salt, derivedKey.toString('base64'));
    });
  } else {
    fn = salt;
    crypto.randomBytes(len, (err, salt) => {
      if (err) return fn(err);

      salt = salt.toString('base64');
      computeHash(password, salt, fn);
    });
  }
}

module.exports.computeHash = computeHash;

// computeHash('123456', 'nguyen', (err, salt, key) => {
//   if (err) return console.log(err);
//   console.log(salt);
//   console.log(key);
// })
