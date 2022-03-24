import React from 'react';
import Title from './Title.jsx';
import AddWords from './AddWords.jsx';
import Search from './Search.jsx';
import Words from './Words.jsx';
const axios = require('axios');

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
    this.search = this.search.bind(this);
    this.refresh = this.refresh.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
    this.editMeaning = this.editMeaning.bind(this);
  }

  componentDidMount() {
    axios({
      url: '/words',
      method: 'GET'
    })
    .then(res => {
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.log('GET err...', err);
    })
  }

  addWord(word, meaning) {
    axios({
      url: '/words',
      method: 'POST',
      data: {
        search: null,
        word: word,
        meaning: meaning
      }
    })
    .then(res => {
      console.log('Successfully POSTed! -> data -> ', res.data);
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.error('POST error: ', err);
    });
  }

  search(term) {
    console.log(`Searching for ${term}`);
    axios({
      url: '/words',
      method: 'POST',
      data: {
        search: term
      }
    })
    .then(res => {
      console.log('Successful POST search!');
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.error('POST search error: ', err);
    })
  }

  refresh() {
    console.log('Content has been refreshed.');
    axios({
      url: '/words',
      method: 'GET'
    })
    .then(res => {
      console.log('Successful refresh.');
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.error(err);
    })
  }

  deleteWord(word) {
    console.log(`Deleting ${word}`);
    axios({
      url: '/words',
      method: 'DELETE',
      data: {
        word: word
      }
    })
    .then(res => {
      console.log('Successfully deleted!');
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.error('Deleting error: ', err);
    })
  }

  editMeaning(prevMeaning, newMeaning) {
    console.log(`Editing "${prevMeaning}" to "${newMeaning}"`);
    axios({
      url: '/words',
      method: 'PATCH',
      data: {
        prev: prevMeaning,
        new: newMeaning
      }
    })
    .then(res => {
      console.log(`Successfully edited ${prevMeaning}`);
      this.setState({
        words: res.data
      });
    })
    .catch(err => {
      console.error('Editing error: ', err);
    })
  }

  render() {
    return (
      <React.Fragment>
      <Title />
      <AddWords addWord={this.addWord} />
      <Search search={this.search} refresh={this.refresh} />
      <Words words={this.state.words} deleteWord={this.deleteWord} editMeaning={this.editMeaning} />
    </React.Fragment>
    )
  }
}

export default App;