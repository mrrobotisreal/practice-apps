import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDisplay: 'none'
    }
    this.submit = this.submit.bind(this);
    this.yes = this.yes.bind(this);
    this.no = this.no.bind(this);
  }

  this.submit(e) {
    // do stuff, including generating and storing a cookie
  }

  this.yes(e) {
    // do more stuff
  }

  this.no(e) {
    // do even more stuff
  }

  render() {
    return (
      <div>
        <label>
          Form 1:
        </label>
        <div>
        </div>
        <label>
          Form 2:
        </label>
        <div>
        </div>
        <label>
          Form 3:
        </label>
        <div>
        </div>
        <div style={{zIndex: '2', display: 'grid none'}}>
          <h1 style={{fontFamily: 'cursive', color: 'blue', gridRow: '1'}}>
            Are you sure everything is correct?
          </h1>
          <button style={{gridRow: '2', gridColumn: '2'}}>
            YES!
          </button>
          <button style={{gridRow: '2', gridColumn: '1'}}>
            NO!
          </button>
        </div>
      </div>
    )
  }
}

export default Checkout;