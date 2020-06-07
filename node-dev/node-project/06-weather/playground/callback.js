var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Nguyen"
  }

  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(25, (user) => {
  console.log(user);
})
