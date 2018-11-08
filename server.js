const express = require('express');
const _ = require('lodash');
const hbs = require("hbs");
const port = process.env.PORT || 8080;

let app = express();

app.set('views', `${__dirname}/views`);
hbs.registerPartials(__dirname + "/views/partials");

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

app.get('/', (request, response) => {
  response.render('index.hbs');
});

app.get('/game', (request, response) => {
  response.render('game.hbs');
});

app.get('/account', (request, response) => {
  response.render('account.hbs');
});

app.get('/leaderboard', (request, response) => {
  response.render('leaderboard.hbs');
});


app.listen(port, () => {
  console.log(`Server is up on port 8080`);
});