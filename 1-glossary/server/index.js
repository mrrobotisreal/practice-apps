require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');
const bodyParser = require('body-parser');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  console.log('Successfully POSTed!');
  console.log('Reqqqd body -> ', req);
  // TODO: add new word to glossary database
  // db.saveWords(req.body);
  res.send();
})

app.get('/words', (req, res) => {
  console.log('Successfully GETted!');
  res.send('Good job!');
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
