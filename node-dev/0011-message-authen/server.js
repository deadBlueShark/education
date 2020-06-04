const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  let allowHeader = 'Origin, X-Requested-With, Content-Type, Accept, access-token'
  res.header('Access-Control-Allow-Headers', allowHeader)
  next()
})

const apiRouter = express.Router()
const authRouter = express.Router()

let messages = [
  {name: "Nguyen", content: "Hello"},
  {name: "David", content: "Good to see you"},
]
let users = [{email: 'nguyen@mail.com', name: 'Nguyen', password: '123456'}]

apiRouter.get('/messages', (req, res) => {
  res.json(messages)
})

app.use('/api/v1', apiRouter)

apiRouter.get('/messages/:user', (req, res) => {
  let message = messages.filter(
    mess => mess.name.toLowerCase() == req.params.user.toLowerCase()
  )
  res.send(message)
})

apiRouter.post('/messages', (req, res) => {
  messages.push(req.body)
  res.json(messages)
})

apiRouter.get('/user/profile', authenticateUser, (req, res) => {
  res.send({email: req.user.email, name: req.user.name})
})

app.use('/auth', authRouter)

authRouter.post('/register', (req, res) => {
  let index = users.push(req.body) - 1
  let user = users[index]
  sendToken(user, res)
})

authRouter.post('/login', (req, res) => {
  let user = users.find(user => user.email === req.body.email)
  console.log(users)
  console.log(user)
  if (!user || user.password !== req.body.password) {
    return res.json({result: 'Email or password invalid'})
  } else {
    sendToken(user, res)
  }
})

function sendToken(user, res) {
  let token = jwt.sign(user.email, 'secretkey')
  res.send({email: user.email, token})
}

function authenticateUser(req, res, next) {
  let token = req.header('access-token')
  if(!token) {
    return res.status(401).send({message: 'Unauthorized request.'})
  }
  let payload = jwt.decode(token, 'secretkey')
  let user = users.find(e => e.email == payload)
  if (!user) {
    return res.status(401).send({message: 'Unauthorized request.'})
  }
  req.user = user
  next()
}

app.listen(8000)
