import React from 'react';

const Words = ({words}) => {
  // javascript goes here
  console.log('words -> ', words);
  return (
    <React.Fragment>
      <ul>
        {
          words.map(word => {
            return (
              <div key={word.wordId}>
                <li style={{fontFamily: 'cursive', color: 'red'}}><h1><u>{word.word}</u> :</h1></li>
                <h4>-- {word.meaning}</h4>
              </div>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default Words;