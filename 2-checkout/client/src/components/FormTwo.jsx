import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zip: 0,
      phone: ''
    }
    this.handleAddress1 = this.handleAddress1.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.next = this.next.bind(this);
  }

  handleAddress1(e) {
    this.setState({
      addressLineOne: e.target.value,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    });
  }

  handleAddress2(e) {
    this.setState({
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: e.target.value,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    });
  }

  handleCity(e) {
    this.setState({
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: e.target.value,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    });
  }

  handleState(e) {
    this.setState({
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: e.target.value,
      zip: this.state.zip,
      phone: this.state.phone
    });
  }

  handleZip(e) {
    this.setState({
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: e.target.value,
      phone: this.state.phone
    });
  }

  handlePhone(e) {
    this.setState({
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: e.target.value
    });
  }

  next(e) {
    e.preventDefault();
    // console.log('Form Two complete! On to Form Three.');
    this.props.addStateTwo(this.state.addressLineOne, this.state.addressLineTwo, this.state.city, this.state.state, this.state.zip, this.state.phone);
    this.setState({
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zip: 0,
      phone: ''
    });
  }

  render() {
    return (
      <form style={{backgroundColor: 'deepskyblue', display: 'grid'}}>
        <label style={{gridRow: '1'}}>
          Address Line 1:
        </label>
        <input onChange={this.handleAddress1} value={this.state.name} style={{gridRow: '2'}} />
        <label style={{gridRow: '3'}}>
          Address Line 2:
        </label>
        <input onChange={this.handleAddress2} value={this.state.email} style={{gridRow: '4'}} />
        <label style={{gridRow: '5'}}>
          City:
        </label>
        <input onChange={this.handleCity} value={this.state.password} style={{gridRow: '6'}} />
        <label style={{gridRow: '7'}}>
          State:
        </label>
        <input onChange={this.handleState} value={this.state.password} style={{gridRow: '8'}} />
        <label style={{gridRow: '9'}}>
          Zip Code:
        </label>
        <input onChange={this.handleZip} value={this.state.password} style={{gridRow: '10'}} />
        <label style={{gridRow: '11'}}>
          Phone Number:
        </label>
        <input onChange={this.handlePhone} value={this.state.password} style={{gridRow: '12'}} />
        <button onClick={this.next}>Next</button>
      </form>
    )
  }
}

export default FormTwo;