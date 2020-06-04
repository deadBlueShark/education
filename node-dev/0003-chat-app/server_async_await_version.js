const express = require('express');
const app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);

let bodyParser = require('body-parser');

http.listen(3000);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let mongoose = require('mongoose');
let dbUrl = 'mongodb://lechinguyen:nguyen123456@ds157864.mlab.com:57864/nguyen-node';

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('DB connected'))
  .catch(err => console.log('Connect failed: ', err));

let Schema = mongoose.Schema;
let messageSchema = new Schema({ name: String, content: String });
let Message = mongoose.model('Message', messageSchema);

app.get('/messages', async (req, res) => {
  try {
    var messages = await Message.find({});
  } catch(err) {
    res.send([]);
  }

  res.send(messages);
})

app.post('/messages', async (req, res) => {
  let message = new Message(req.body);

  try {
    await Message.create(message);
    let data = await Message.findOne({content: /badword/});
    if(data) {
      console.log('Bad word found: ', data);
      await Message.deleteOne({_id: data.id});
    } else {
      io.emit('message', req.body);
    }
  } catch(err) {
    res.sendStatus(400);
  } finally {
    console.log('Logger, shutdown resourse connection');
  }

  res.sendStatus(200);
})

io.on('connection', (socker) => {
  console.log('user connected');
})
