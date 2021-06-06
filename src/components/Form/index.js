import React from 'react';
import ListArticle from './components/ListArticle'

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title:'',
      author:'',
      create_at:'',
      tag:''
    };

    //binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //a method that when called changes the value of this.state.value
  handleChange(event){
    this.props.handleChange({[event.taget.name]:event.target.value})
    this.setState({[event.target.name]: event.target.value});
  }

  //this method is called when the form is submitted.
  handleSubmit(event) {
    event.preventDefault();
    alert('A value was submitted:' + this.state.value);
    this.setState({ 
      title:'',
      author:'',
      create_at:'',
      tag:''
     }) // after doing something with the data we reset the form value to empty quotes again
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* the value of the input is tied to this.state.value so when a user types the handleChange method changes this.state.value to match*/}
        <input
        className='form_styles'
        name='title'
        placeholder='Title'
        value={this.state.title}
        onChange={event => this.handleChange(event)}
        />
        <input
        className='form_styles'
        name='author'
        placeholder='Author'
        value={this.state.author}
        onChange={event => this.handleChange(event)}
        />
        <input
        className='form_styles'
        name='create_at'
        placeholder='Create At'
        value={this.state.create_at}
        onChange={event => this.handleChange(event)}
        />
        <input
        className='form_styles'
        name='tag'
        placeholder='Tag'
        value={this.state.tag}
        onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.handleSubmit(event)}>Submit</button>
      </form>
    );
  }

}