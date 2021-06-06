import { Component } from 'react';
import axios from 'axios';

export default class Stories extends Component {
  //props - what we receive 
  constructor(props) {
    super(props);

    //state - local storage
    this.state = {
      arrayOfStories: [],
      value: ''
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
    const { arrayOfStories } = this.state;
    return (
      <div>
        {arrayOfStories.map(story => {
          const { title, author, date, tag} = story;
          return (
            <Stories key={tag} date={date} author={author} title={title} />
          );

        })}
      </div>
    );
  }

}


