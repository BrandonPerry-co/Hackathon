
import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:''
    };

    //binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //a method that when called changes the value of this.state.value
  handleChange(event){
    this.setState({value: event.target.value});
  }

  //this method is called when the form is submitted.
  handleSubmit(event) {
    event.preventDefault();
    alert('A value was submitted:' + this.state.value);
    this.setState({ value: '' }) // after doing something with the data we reset the form value to empty quotes again
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* the value of the input is tied to this.state.value so when a user types the handleChange method changes this.state.value to match*/}
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter value" required />
        <button type="search">Search</button>
      </form>
    );
  }

}