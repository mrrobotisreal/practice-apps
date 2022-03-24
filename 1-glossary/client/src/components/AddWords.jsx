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
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  handleChangeWord(e) {
    this.setState({
      word: e.target.value,
      meaning: this.state.meaning
    });
  }

  handleChangeMeaning(e) {
    this.setState({
      word: this.state.word,
      meaning: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addWord(this.state.word, this.state.meaning);
    this.setState({
      word: '',
      meaning: ''
    })
  }

  mouseEnter(e) {
    e.target.style.transform = 'scale(1.25)';
  }

  mouseLeave(e) {
    e.target.style.transform = 'scale(1.0)';
  }

  render() {
    return (
      <React.Fragment>
        <div style={{border: '6px ridge red', borderRadius: '12px', padding: '2%', paddingLeft: '10%', marginTop: '5%', marginBottom: '5%',
          marginRight: '26%', marginLeft: '2%', backgroundImage: 'linear-gradient(to right, black, red)'}}>
          <label style={{fontFamily: 'cursive', color: 'red'}}><u><h2>New Word:</h2></u> </label>
          <input style={{backgroundColor: 'black', border: '1px solid red'}} value={this.state.word} onChange={this.handleChangeWord} />
          <label style={{fontFamily: 'cursive', color: 'red'}}><u><h2>Word Meaning:</h2></u> </label>
          <input style={{backgroundColor: 'black', marginBottom: '4%', border: '1px solid red'}} value={this.state.meaning} onChange={this.handleChangeMeaning} />
          <button onClick={this.handleSubmit} style={{
            border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive', color: 'red',
            transition: '.2s', marginLeft: '2%', marginBottom: '4%'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
              <b><u>Add Word and Meaning</u></b>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default AddWords;