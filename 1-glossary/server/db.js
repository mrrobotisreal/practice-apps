const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/words', {
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

const hashlater = (str, max) => {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
}

const saveWords = (words, cb = () => {}) => {
  console.log('words -> ', words);
  if (Array.isArray(words)) {
    words.forEach(word => {
      let wordEntry = new Word({
        wordId: hashlater(word.word, words.length ** 2),
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
      wordId: hashlater(word.meaning, 10000),
      word: word.word,
      meaning: word.meaning
    });
    Word.findOneAndDelete({wordId: word.wordId}, (err, success) => {
      if (err) {
        console.error('database error: ', err);
      } else {
        console.log('database success: ', success)
      }
    });
    wordEntry.save();
    cb();
  }
};

module.exports.word = Word;
module.exports.saveWords = saveWords;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
