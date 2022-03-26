import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
// import FormThree from './FormThree.jsx';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOne: 'content',
      displayTwo: 'none',
      displayThree: 'none',
      confirm: 'none',
      name: '',
      email: '',
      password: '',
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zip: 0,
      phone: '',
      card: '',
      expiry: '',
      cvv: 0,
      billingZip: 0
    }
    this.addStateOne = this.addStateOne.bind(this);
    this.addStateTwo = this.addStateTwo.bind(this);
    this.addStateThree = this.addStateThree.bind(this);
    this.showOne = this.showOne.bind(this);
    this.showTwo = this.showTwo.bind(this);
    this.showThree = this.showThree.bind(this);
    this.submit = this.submit.bind(this);
  }

  addStateOne(name, email, password) {
    this.setState({
      displayOne: this.state.displayOne,
      displayTwo: this.state.displayTwo,
      displayThree: this.state.displayThree,
      confirm: this.state.confirm,
      name: name,
      email: email,
      password: password,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    });
    setTimeout(() => {
      this.showTwo();
    }, 50);
  }

  addStateTwo(add1, add2, city, state, zip, phone) {
    this.setState({
      displayOne: this.state.displayOne,
      displayTwo: this.state.displayTwo,
      displayThree: this.state.displayThree,
      confirm: this.state.confirm,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLineOne: add1,
      addressLineTwo: add2,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    });
    setTimeout(() => {
      this.showThree();
    }, 50);
  }

  addStateThree(card, expiry, cvv, billingZip) {
    this.setState({
      displayOne: this.state.displayOne,
      displayTwo: this.state.displayTwo,
      displayThree: this.state.displayThree,
      confirm: this.state.confirm,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      card: card,
      expiry: expiry,
      cvv: cvv,
      billingZip: billingZip
    });
    setTimeout(() => {
      this.showTwo();
    }, 50);
  }

  showOne(e) {
    // display form one, hide the rest
  }

  showTwo(e) {
    // e.preventDefault();
    console.log('Form One complete! On to Form Two.');
    this.props.nextOne(this.state.name, this.state.email, this.state.password);
    this.setState({
      displayOne: 'none',
      displayTwo: 'contents',
      displayThree: this.state.displayThree,
      confirm: this.state.confirm,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    });
  }

  showThree(e) {
    // display form three, hide the rest
    console.log('Form One complete! On to Form Two.');
    this.props.nextTwo(this.state.addressLineOne, this.state.addressLineTwo, this.state.city, this.state.state, this.state.zip, this.state.phone);
    this.setState({
      displayOne: 'none',
      displayTwo: 'contents',
      displayThree: this.state.displayThree,
      confirm: this.state.confirm,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    });
  }

  submit(e) {
    // submit form 3, the final form, and display thank you page
  }

  render(props) {
    return (
      <div>
        <div style={{display: this.state.displayOne}}>
          <FormOne nextOne={this.props.nextOne} addStateOne={this.addStateOne} />
        </div>
        <div style={{display: this.state.displayTwo}}>
          <FormTwo addStateTwo={this.addStateTwo} />
        </div>
        {/* <div style={{display: this.state.displayThree}}>
          <FormThree />
        </div>
        <div style={{display: this.state.displayThree}}>
          <Confirm />
        </div> */}
      </div>
    )
  }
}

export default Forms;