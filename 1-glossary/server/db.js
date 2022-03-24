const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const { Schema } = mongoose;

const wordSchema = new Schema({
  wordId: Number,
  word: String,
  meaning: String
});

const Word = mongoose.model('Word', wordSchema);

const hashlator = (str, max) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
}

const saveWords = (words, cb = () => {}) => {
  console.log('words -> ', words);
  if (Array.isArray(words)) {
    words.forEach(word => {
      let wordEntry = new Word({
        wordId: hashlator(word.word, words.length ** 2),
        word: word.word,
        meaning: word.meaning
      });
      Word.findOneAndDelete({wordId: word.wordId}, (err, success) => {
        if (err) {
          console.error('database error: ', err);
        } else {
          console.log('database success: ', success);
        }
      });
      wordEntry.save();
      cb();
    })
  } else {
    let wordEntry = new Word({
      wordId: hashlator(words.meaning, 10000),
      word: words.word,
      meaning: words.meaning
    });
    Word.findOneAndDelete({wordId: hashlator(words.meaning, 10000)}, (err, success) => {
      if (err) {
        console.error('database error: ', err);
      } else {
        console.log('database success: ', success)
      }
    });
    wordEntry.save((err, success) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Great success!!!! ', success);
        cb(null, success);
      }
    });

  }
};

const deleteWord = (word, cb = () => {}) => {
  Word.findOneAndDelete({word: word.word}, (err, success) => {
    if (err) {
      console.error('Db Delete error: ', err);
    } else {
      console.log('Db Delete success!');
      cb(null, success);
    }
  });
}

const editMeaning = (word, cb = () => {}) => {
  Word.findOneAndUpdate({meaning: word.prev}, {meaning: word.new}, {new: true}, (err, success) => {
    if (err) {
      console.error('Db edit error: ', err);
    } else {
      console.log('Db edit success!');
      cb(null, success);
    }
  });
}

module.exports.words = Word;
module.exports.saveWords = saveWords;
module.exports.deleteWord = deleteWord;
module.exports.editMeaning = editMeaning;
