const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config/database');
const routes = require('./routes');
const app = express();
const port = 3000;

mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connceted to database ' + config.db + ' at:' + config.uri)
  }
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes)

app.listen(port);
  console.log(`App is running at http://localhost:${port}`);


module.exports = app;
