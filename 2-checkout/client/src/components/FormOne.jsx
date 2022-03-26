import React from 'react';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      hidden: []
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.next = this.next.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      email: this.state.email,
      password: this.state.password,
      hidden: this.state.hidden
    });
  }

  handleEmailChange(e) {
    this.setState({
      name: this.state.name,
      email: e.target.value,
      password: this.state.password,
      hidden: this.state.hidden
    });
  }

  handlePasswordChange(e) {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      password: e.target.value,
      hidden: [].fill('*', 0, this.state.password.length)
    });
  }

  next(e) {
    e.preventDefault();
    // console.log('Form One complete! On to Form Two.');
    // this.props.nextOne(this.state.name, this.state.email, this.state.password);
    this.props.addStateOne(this.state.name, this.state.email, this.state.password);
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <form style={{backgroundColor: 'deepskyblue', display: 'grid'}}>
        <label style={{gridRow: '1'}}>
          Name:
        </label>
        <input onChange={this.handleNameChange} value={this.state.name} style={{gridRow: '2'}} />
        <label style={{gridRow: '3'}}>
          Email:
        </label>
        <input onChange={this.handleEmailChange} value={this.state.email} style={{gridRow: '4'}} />
        <label style={{gridRow: '5'}}>
          Password:
        </label>
        <input onChange={this.handlePasswordChange} value={this.state.password} style={{gridRow: '6'}} />
        <button onClick={this.next}>Next</button>
      </form>
    )
  }
}

export default FormOne;