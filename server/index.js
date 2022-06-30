const express = require('express');
const path = require('path');

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: 'a2a7b9e87b944b6bb0460d7ea20d1e95',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
