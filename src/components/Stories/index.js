import { Component } from 'react';
import axios from 'axios';

export default class Stories extends Component {
  //props - what we receive 
  constructor(props) {
    super(props);

    //state - local storage
    this.state = {
      arrayOfStories: []
    };
  }

  componentDidMount() {
    axios.get('http://hn.algolia.com/api/v1/search?query=story')
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories })
      })

  }


  render() {
    return (
      <h1>Hello</h1>
    )

  }


}