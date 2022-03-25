import React from 'react';
import Title from './Title.jsx';
import FormOne from './FormOne.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOne: {
        name: '',
        email: '',
        password: ''
      },
      formTwo: {
        addressLineOne: '',
        addressLineTwo: '',
        city: '',
        state: '',
        zip: 0,
        phone: ''
      },
      formThree: {
        card: '',
        expiry: '',
        cvv: 0,
        billingZip: 0
      }
    }
    this.nextOne = this.nextOne.bind(this);
  }

  nextOne(name, email, password) {
    console.log('Next one');
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <FormOne nextOne={this.nextOne} />
      </React.Fragment>
    )
  }
}

export default App;