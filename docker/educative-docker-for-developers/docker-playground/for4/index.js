const HTTP_PORT = 80;

const cors = require('cors');
const express = require('express');
const path = require('path');

var sourcesDirectory = path.resolve(__dirname, 'www');
var app = express();
app.use(cors());

// API
app.get('/v1/square/:value', function (req, res) {
  const value = req.params.value;
  const square = Math.pow(value, 2);
  res.send({
    value,
    square
  });
});

// Static files
app.use(express.static(sourcesDirectory, {
  index: 'index.html',
  extensions: ['html']
}));

var server = require('http').createServer(app);
server.listen(HTTP_PORT);

console.log(`Listening on http://localhost:${HTTP_PORT}`);
