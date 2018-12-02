const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (request, response) => {
  let username = request.body.username
  let password = request.body.password
  let user = new user.User()
  user.login(username, password).then((result) => {
    if (result) {
      response.sendStatus(200)
    } else {
      response.sendStatus(400)
    }
  })
})

app.get('/leaderboard', (res, req) => {
  // gets scores from database
})
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));