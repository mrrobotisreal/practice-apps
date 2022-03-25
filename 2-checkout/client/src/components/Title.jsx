import React from 'react';

const Title = (props) => {
  return (
    <div style={{fontFamily: 'cursive', color: 'blue', backgroundColor: 'skyblue', border: '6px ridge blue', borderRadius: '12px 40px',
    textAlign: 'center'}}>
      <h1 style={{borderBottom: '3px ridge blue', borderRadius: '12px', width: 'fit-content', textAlign: 'center'}}>
        Welcome to Gobi!
      </h1>
      <h2 style={{borderBottom: '3px ridge blue', borderRadius: '12px', width: 'fit-content', textAlign: 'center'}}>
        Why get lost in the Amazon when you can shop in the Desert!?
      </h2>
    </div>
  )
}

export default Title;