import React from 'react';

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words,
      flashCard: false,
      show: 'content'
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  mouseEnter(e) {
    e.target.style.transform = 'scale(1.25)';
  }

  mouseLeave(e) {
    e.target.style.transform = 'scale(1.0)';
  }

  edit(e) {
    let newMeaning = prompt('How would you like to define this word?');
    console.log(`Successfully edited -> ${e.target.value} to -> ${newMeaning}`)
    this.props.editMeaning(e.target.value, newMeaning);
  }

  delete(e) {
    this.props.deleteWord(e.target.value);
  }

  flashCard(e) {
    // display
  }

  render() {
    // if (this.state.flashCard) {
    //   let words = this.props.words.map(word => {
    //     return (
    //       <form key={word.wordId} onSubmit={(e) => {
    //         e.preventDefault();
    //       }}>
    //         <div style={{border: '4px ridge red', borderRadius: '12px', backgroundColor: 'black', paddingLeft: '3%',
    //         paddingTop: '2%', marginRight: '30%', marginBottom: '10%', backgroundImage: 'linear-gradient(to right, black, red)'}}
    //         onClick={this.flashCard}>
    //           <div style={{display: 'grid'}}>
    //             <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
    //             color: 'red', transition: '.6s', gridColumn: '1', transition: '.2s', width: '30%'}}
    //             onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.edit} value={word.meaning}>
    //               Edit
    //               </button>
    //             <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
    //             color: 'red', transition: '.6s', marginLeft: '2%', gridColumn: '2', transition: '.2s', width: '30%', marginLeft: '-65%'}}
    //             onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.delete} value={word.word}>
    //               Delete
    //               </button>
    //           </div>
    //           <li style={{fontFamily: 'cursive', color: 'red'}}><h1><u>{word.word}</u> :</h1></li>
    //           <h4 style={{marginBottom: '7%', color: 'white', display: this.state.show}}>-- {word.meaning}</h4>
    //         </div>
    //       </form>
    //     )
    //   })
    // } else {
    //   let words = this.props.words.map(word => {
    //     return (
    //       <form key={word.wordId} onSubmit={(e) => {
    //         e.preventDefault();
    //       }}>
    //         <div style={{border: '4px ridge red', borderRadius: '12px', backgroundColor: 'black', paddingLeft: '3%',
    //         paddingTop: '2%', marginRight: '30%', marginBottom: '10%', backgroundImage: 'linear-gradient(to right, black, red)'}}
    //         onClick={this.flashCard}>
    //           <div style={{display: 'grid'}}>
    //             <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
    //             color: 'red', transition: '.6s', gridColumn: '1', transition: '.2s', width: '30%'}}
    //             onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.edit} value={word.meaning}>
    //               Edit
    //               </button>
    //             <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
    //             color: 'red', transition: '.6s', marginLeft: '2%', gridColumn: '2', transition: '.2s', width: '30%', marginLeft: '-65%'}}
    //             onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.delete} value={word.word}>
    //               Delete
    //               </button>
    //           </div>
    //           <li style={{fontFamily: 'cursive', color: 'red'}}><h1><u>{word.word}</u> :</h1></li>
    //           <h4 style={{marginBottom: '7%', color: 'white'}}>-- {word.meaning}</h4>
    //         </div>
    //       </form>
    //     )
    //   })
    // }
    return (
      <React.Fragment>
        <ul>
          {
            // words
            this.props.words.map(word => {
              return (
                <form key={word.wordId} onSubmit={(e) => {
                  e.preventDefault();
                }}>
                  <div style={{border: '4px ridge red', borderRadius: '12px', backgroundColor: 'black', paddingLeft: '3%',
                  paddingTop: '2%', marginRight: '30%', marginBottom: '10%', backgroundImage: 'linear-gradient(to right, black, red)'}}
                  onClick={this.flashCard}>
                    <div style={{display: 'grid'}}>
                      <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
                      color: 'red', transition: '.6s', gridColumn: '1', transition: '.2s', width: '30%'}}
                      onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.edit} value={word.meaning}>
                        Edit
                        </button>
                      <button style={{border: '3px ridge red', backgroundColor: 'black', borderRadius: '12px', fontFamily: 'cursive',
                      color: 'red', transition: '.6s', marginLeft: '2%', gridColumn: '2', transition: '.2s', width: '30%', marginLeft: '-65%'}}
                      onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.delete} value={word.word}>
                        Delete
                        </button>
                    </div>
                    <li style={{fontFamily: 'cursive', color: 'red'}}><h1><u>{word.word}</u> :</h1></li>
                    <h4 style={{marginBottom: '7%', color: 'white'}}>-- {word.meaning}</h4>
                  </div>
                </form>
              )
            })
          }
      </ul>
      </React.Fragment>
    )
  }
}

// const Words = ({words}) => {
//   // javascript goes here
//   console.log('words -> ', words);
//   return (
    // <React.Fragment>
    //   <ul>
    //     {
    //       words.map(word => {
    //         return (
    //           <div key={word.wordId}>
    //             <li style={{fontFamily: 'cursive', color: 'red'}}><h1><u>{word.word}</u> :</h1></li>
    //             <h4>-- {word.meaning}</h4>
    //           </div>
    //         )
    //       })
    //     }
    //   </ul>
    // </React.Fragment>
//   )
// }

export default Words;