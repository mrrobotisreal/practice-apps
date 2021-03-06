import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      flashCard: false,
      mode: 'red'
    }
    this.onChange = this.onChange.bind(this);
    this.query = this.query.bind(this);
    this.refresh = this.refresh.bind(this);
    this.flashCard = this.flashCard.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    });
    setTimeout(() => {
      if (this.state.query !== '') {
        this.props.search(this.state.query);
      } else {
        this.refresh();
      }
    }, 50);
  }

  query(e) {
    e.preventDefault();
    this.props.search(this.state.query);
    this.setState({
      query: ''
    })
  }

  refresh(e) {
    this.props.refresh();
  }

  flashCard(e) {
    if (!this.state.flashCard) {
      this.setState({
        query: this.state.query,
        flashCard: true,
        mode: 'green'
      });
      setTimeout(() => {
        this.props.flashCard(this.state.flashCard);
      }, 50);
    } else {
      this.setState({
        query: this.state.query,
        flashCard: false,
        mode: 'red'
      });
      setTimeout(() => {
        this.props.flashCard(this.state.flashCard);
      }, 50);
    }
  }

  mouseEnter(e) {
    e.target.style.transform = 'scale(1.25)';
  }

  mouseLeave(e) {
    e.target.style.transform = 'scale(1.0)';
  }

  render() {
    return (
      <div style={{border: '6px ridge red', borderRadius: '12px', padding: '2%', paddingLeft: '10%', marginTop: '5%', marginBottom: '5%',
      marginRight: '26%', marginLeft: '2%', backgroundImage: 'linear-gradient(to right, black, red)'}}>
        <label style={{fontFamily: 'cursive', color: 'red'}}><u><h2>Search for a Word:</h2></u></label>
        <input style={{backgroundColor: 'black', border: '1px solid red'}} value={this.state.query} onChange={this.onChange} />
        <button style={{
            border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive', color: 'red',
            transition: '.2s', marginLeft: '2%', marginBottom: '4%'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}
            onClick={this.query}>
              <b><u>Search</u></b>
        </button>
        <button style={{
            border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive', color: 'red',
            transition: '.2s', marginLeft: '2%', marginBottom: '4%'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}
            onClick={this.refresh}>
              <b><u>Refresh</u></b>
        </button>
        <button style={{
            border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive', color: this.state.mode,
            transition: '.2s', marginLeft: '2%', marginBottom: '4%'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}
            onClick={this.flashCard} value={this.state.flashCard}>
              <b><u>FlashCard Mode</u></b>
        </button>
      </div>
    )
  }
}

export default Search;