const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config/database');
const api = require('./routes/api');
const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:4200'}));
mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
  if(err) {
    console.log('Error connecting to database', err);
  } else {
    console.log(`Database ${config.db}, is connected and is running at ${config.uri}`)
  }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api)

app.listen(port);
  console.log(`App is running at http://localhost:${port}`);


module.exports = app;
