import React from 'react';

class AddWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      meaning: ''
    };
    this.handleChangeWord = this.handleChangeWord.bind(this);
    this.handleChangeMeaning = this.handleChangeMeaning.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeWord(e) {
    // TODO: handle incoming input, change word and meaning state
    this.setState({
      word: e.target.value,
      meaning: this.state.meaning
    });
  }

  handleChangeMeaning(e) {
    // TODO: handle incoming input, change word and meaning state
    this.setState({
      word: this.state.word,
      meaning: e.target.value
    });
  }

  handleSubmit(e) {
    // TODO: handle submit, send state back to App.jsx
    e.preventDefault();
    this.props.addWord(this.state.word, this.state.meaning);
    this.setState({
      word: '',
      meaning: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <form /*onSubmit={this.handleSubmit}*/>
          <label><u><h2>New Word:</h2></u> </label>
          <input style={{backgroundColor: 'black'}} value={this.state.word} onChange={this.handleChangeWord} />
          <label><u><h2>Word Meaning:</h2></u> </label>
          <input style={{backgroundColor: 'black'}} value={this.state.meaning} onChange={this.handleChangeMeaning} />
          <button onClick={this.handleSubmit} style={{
            border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive', color: 'red'
            }}>
              <b><u>Add Word and Meaning</u></b>
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default AddWords;