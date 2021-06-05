import { Component } from 'react';
import axios from 'axios';

export default class Stories extends Component {
  //props - what we receive 
  constructor(props) {
    super(props);

    //state - local storage
    this.state = {
      story: []
    }; // has to be an object 
  }

  componentDidMount() {
    //call axios get to recieve stories array
    axios.get('http://hn.algolia.com/api/v1/search?query=story')
      .then(response => response.data)
      .then(data => this.setState({ story: data }));
  }


  render() {
    // const { story } = this.state;
    return (
      <h1>Hello</h1>
    )

  }


}