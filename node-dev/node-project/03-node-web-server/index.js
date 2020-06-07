const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + "/views/partials");

// Define helper to use in view
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

// Write log file (In middleware layer)
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: Started ${req.method} ${req.path}`;
  console.log(log)
  fs.appendFile("developmen.log", log + "\n", (err) => {
    if (err) throw err;
  });
  next();
})
// app.use((req, res, next) => {
//   res.render('404.hbs');
// })

app.get("/", (req, res) => {
  res.render('home.hbs', {
    title: "Home page",
    welcomeMessage: 'Welcome to my page'
  })
});

app.get("/about", (req, res) => {
  res.render('about.hbs', {
    title: "About page"
  });
});

app.listen(3000);
