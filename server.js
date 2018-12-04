const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const user = require('./models/user');
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = { origin: process.env.FRONTEND_URL, optionsSuccessStatus: 200 } || "http://localhost:3000"

app.get('/', cors(corsOptions), (req, res) => {
  res.json('Hosted');
});

app.post('/login', cors(corsOptions), (request, response) => {
  let username = request.body.username
  let password = request.body.password
  let new_user = new user.User()
  new_user.login(username, password).then((result) => {
    if (result) {
      console.log("SUCCESS")
      response.sendStatus(200)
    } else {
      response.sendStatus(400)
    }
  })
})


app.post('/register', cors(corsOptions), (request, response) => {
  console.log(request.body)
  let username = request.body.username
  let password = request.body.password
  let new_user = new user.User()

  new_user.validateUsername(username).then((result) => {
    if (
      result &&
      new_user.regexPassword(password)
    ) {
      console.log('validation passed')
      new_user.register(username, password).then((finalResult) => {
        response.send(finalResult)
      })
    } else {
      response.sendStatus(400)
    }
  }).catch(error => {
    if (error.message === 'Bad Username') {
      response.sendStatus(400)
    }
  })
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));