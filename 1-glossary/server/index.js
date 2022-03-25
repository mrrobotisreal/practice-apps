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
  console.log('Successfully POSTed! searchyyy -> ', req.body);
  let search = req.body.search;
  if (search) {
    console.log(`It's true!`);
    let glossary = db.words.find({word: {$regex: search, $options: 'i'}}).sort({word: -1});
    glossary.exec((err, docs) => {
      if (err) {
        console.error(err);
      } else {
        console.log('get ressie -> ', docs);
        res.send(docs);
      }
    })
  } else {
    db.saveWords(req.body, (err, success) => {
      if (err) {
        console.error(err);
      } else {
        let glossary = db.words.find().sort({word: -1});
        glossary.exec((err, docs) => {
          if (err) {
            console.error(err);
          } else {
            console.log('post ressie -> ', docs);
            res.send(docs);
          }
        })
      }
    });
  }
})

app.get('/words', (req, res) => {
  console.log('Successfully GETted!');
  let glossary = db.words.find().sort({word: -1});
  glossary.exec((err, docs) => {
    if (err) {
      console.error(err);
    } else {
      console.log('get ressie -> ', docs);
      res.send(docs);
    }
  })
});

app.delete('/words', (req, res) => {
  console.log('Successfully DELETEd!');
  console.log('req body -> ', req.body);
  db.deleteWord(req.body, (err, success) =>{
    if (err) {
      console.error(err);
    } else {
      let glossary = db.words.find().sort({word: -1});
      glossary.exec((err, docs) => {
        if (err) {
          console.error(err);
        } else {
          console.log('delete ressie -> ', docs);
          res.send(docs);
        }
      })
    }
  });
});

app.patch('/words', (req, res) => {
  console.log('Successfully PATCHed!');
  console.log('req body -> ', req.body);
  db.editMeaning(req.body, (err, success) => {
    if (err) {
      console.error(err);
    } else {
      let glossary = db.words.find().sort({word: -1});
      glossary.exec((err, docs) => {
        if (err) {
          console.error(err);
        } else {
          console.log('patch ressie -> ', docs);
          res.send(docs);
        }
      })
    }
  });
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
