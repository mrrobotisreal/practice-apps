import React from 'react';
import Title from './Title.jsx';
import Forms from './Forms.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: false,
      two: false,
      three: false
    }
    this.nextOne = this.nextOne.bind(this);
    this.nextTwo = this.nextTwo.bind(this);
  }

  nextOne(name, email, password) {
    console.log('Next one');
    axios({
      url: '/formone',
      method: 'POST',
      data: {
        form: 'formOne',
        name: name,
        email: email,
        password: password
      }
    })
    .then(res => {
      console.log('Great success!');
      this.setState({
        formOne: this.state.formOne,
        formTwo: this.state.formTwo,
        formThree: this.state.formThree,
        one: true,
        two: this.state.two,
        three: this.state.three
      });
      console.log(`one's state is -> ${this.state.one}`);
    })
    .catch(err => {
      console.error(err);
    })
  }

  nextTwo(add1, add2, city, state, zip, phone) {
    console.log('Next two');
    axios({
      url: '/formtwo',
      method: 'POST',
      data: {
        form: 'formTwo',
        add1: add1,
        add2: add2,
        city: city,
        state: state,
        zip: zip,
        phone: phone
      }
    })
    .then(res => {
      console.log('Great success!');
      this.setState({
        one: false,
        two: true,
        three: this.state.three
      });
      console.log(`one's state is -> ${this.state.one}`);
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Forms nextOne={this.nextOne} nextTwo={this.nextTwo} />
      </React.Fragment>
    )
  }
}

export default App;