import React from 'react';
import Title from './Title.jsx';
import AddWords from './AddWords.jsx';
import Words from './Words.jsx';
const axios = require('axios');

// const App = () => {
//   // do javascript here

//   return (
    // <div>
    //   <h1 style={{textAlign: 'center', color: 'red', fontFamily: 'cursive'}}><u><b>Hello Glossary!</b></u></h1>
    // </div>
//   )
// }

const defaultWords = [
  {word: 'Agastopia', meaning: `admiration of a particular part of someone's body`, wordId: 53},
  {word: 'Cattywampus', meaning: `askew`, wordId: 67},
  {word: 'язык программирования', meaning: `programming language`, wordId: 95},
  {word: 'иностранных компаниях', meaning: `foreign companies`, wordId: 81},
  {word: 'Đỉnh cao', meaning: `pinnacle, zenith, peak`, wordId: 79},
  {word: 'Hẹn ngày mai gặp lại bạn', meaning: `See you tomorrow`, wordId: 9},
  {word: '飛機場', meaning: `airport`, wordId: 41},
  {word: '網絡服務器', meaning: `web/network server`, wordId: 16},
  {word: 'להתפלל', meaning: `to pray`, wordId: 45},
  {word: 'להרגיש אקסטטי', meaning: `to feel ecstatic`, wordId: 71}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: defaultWords
    }
    this.addWord = this.addWord.bind(this);
  }

  componentDidMount() {
    // axios({
    //   url: '/words',
    //   method: 'GET'
    // })
    // .then(res => {
    //   this.setState({
    //     words: res.data
    //   })
    // })
    // .catch(err => {
    //   console.log('GET err...', err);
    // })
  }

  addWord(word, meaning) {
    // TODO: make this function add words to the database
    axios({
      url: '/words',
      method: 'POST',
      data: {
        word: word,
        meaning: meaning
      }
    })
    .then(res => {
      console.log('Successfully POSTed!');
    })
    .catch(err => {
      console.error('POST error: ', err);
    });
  }

  render() {
    return (
      <React.Fragment>
      <Title />
      <AddWords addWord={this.addWord} />
      <Words words={this.state.words} />
    </React.Fragment>
    )
  }
}

export default App;