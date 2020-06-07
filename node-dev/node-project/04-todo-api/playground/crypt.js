

let password = "123456";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

let hash = "$2a$10$pOIonTrQ41i3DbaxA3jzSuOJPYi5HyqVM/JHDh28jYqtmijYd6I2m";
bcrypt.compare(password, hash, (err, res) => {
  console.log(res);
})
