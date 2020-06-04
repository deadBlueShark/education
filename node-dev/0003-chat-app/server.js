const express = require('express');
const app = express();

// Set up HTTP server to work with Socket.io
let http = require('http').Server(app);
let io = require('socket.io')(http);

// Use to parse request body to JSON
let bodyParser = require('body-parser');

// app.listen(3000);
http.listen(3000);

// Setting middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// MongoDB object modeling for NodeJS
let mongoose = require('mongoose');
let dbUrl = 'mongodb://lechinguyen:nguyen123456@ds157864.mlab.com:57864/nguyen-node';

// mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//   console.log('MongoDB connection: ', err);
// })
// User promise version
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB connected'))
  .catch(err => console.log('Connect failed: ', err));

// Create Message schema
let Schema = mongoose.Schema;
// Design model
let messageSchema = new Schema({ name: String, content: String });
// Create model
let Message = mongoose.model('Message', messageSchema);

// let messages = [
//   { name: 'David', content: 'Hi'},
//   { name : 'James', content: 'Nice to meet you' }
// ]

app.get('/hello', (req, res) => {
  res.send('Hello World');
})

app.get('/messages', (req, res) => {
  Message.find({}).then(messages => {
    res.send(messages);
  }).catch(err => {
    console.log('Retrieve data faild: ', err)
  });
})

app.get('/user/:name/messages', async (req, res) => {
  res.send(await Message.find({name: req.params.name}));
})

app.post('/messages', (req, res) => {
  console.log(req.body);
  // messages.push(req.body);

  let message = new Message(req.body);
  console.log(message);
  // Persist message to DB
  Message.create(message)
    .then(result => {
      console.log('Persist data successfully: ', result);

      // Remove bad messages
      return Message.findOne({content: 'badword'});
    })
    .then((data) => {
      if(data) {
        console.log('Bad word found: ', data);
        // Remove bad word
        return Message.remove({_id: data.id});
      }

      // Emit a 'message' event to client
      io.emit('message', req.body);
      res.sendStatus(200);
    })
    .then(() => {
      console.log('Bad word removed.');
    })
    .catch(err => {
      console.log('Persist data failed: ', err);
      res.sendStatus(400);
    });
})

// Make o 'connection' event to client
io.on('connection', (socker) => {
  console.log('user connected');
})
