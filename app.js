const express = require('express');
const _ = require('lodash');
const hbs = require("hbs");
const port = process.env.PORT || 8080;

let app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
  response.render('index.hbs');
})


app.listen(port, () => {
  console.log(`Server is up on port 8080`);
})