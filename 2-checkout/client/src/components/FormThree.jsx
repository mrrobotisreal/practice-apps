import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    }
    this.handleCard = this.handleCard.bind(this);
    this.handleExpiry = this.handleExpiry.bind(this);
    this.handleCvv = this.handleCvv.bind(this);
    this.handleBillingZip = this.handleBillingZip.bind(this);
    this.next = this.next.bind(this);
  }

  handleCard(e) {
    this.setState({
      card: `${e.target.value}`,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    })
  }

  handleExpiry(e) {
    this.setState({
      card: this.state.card,
      expiry: `${e.target.value}`,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    })
  }

  handleCvv(e) {
    this.setState({
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: e.target.value,
      billingZip: this.state.billingZip
    })
  }

  handleBillingZip(e) {
    this.setState({
      card: this.state.card,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: e.target.value
    })
  }

  next(e) {
    e.preventDefault();
    console.log('next form three <-', this.state.card, this.state.expiry, this.state.cvv, this.state.billingZip);
    this.props.addStateThree(this.state.card, this.state.expiry, this.state.cvv, this.state.billingZip);
    this.setState({
      card: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    })
  }

  render() {
    return (
      <form style={{backgroundColor: 'deepskyblue', display: 'grid'}}>
        <label style={{gridRow: '1'}}>
          Card Number:
        </label>
        <input onChange={this.handleCard} value={this.state.card} style={{gridRow: '2'}} />
        <label style={{gridRow: '3'}}>
          Expiration Date(YYYY-MM-DD formatting please):
        </label>
        <input onChange={this.handleExpiry} value={this.state.expiry} style={{gridRow: '4'}} />
        <label style={{gridRow: '5'}}>
          CVV Number:
        </label>
        <input onChange={this.handleCvv} value={this.state.cvv} style={{gridRow: '6'}} />
        <label style={{gridRow: '7'}}>
          Billing Zip Code:
        </label>
        <input onChange={this.handleBillingZip} value={this.state.billingZip} style={{gridRow: '8'}} />
        <button onClick={this.next}>
          Next
        </button>
      </form>
    )
  }
}

export default FormThree;