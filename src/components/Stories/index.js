import { Component } from 'react';
import axios from 'axios';


class Stories extends Component {
  //state - local storage
  state = {
    arrayOfStories: [],
    search: ''
  };


  componentDidMount() {
    axios.get('http://hn.algolia.com/api/v1/search?query=story')
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories })
        console.log(arrayOfStories);
      })

  }

  handleInput(event) {

    this.setState({ search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); //keeps it from going back to showing 'search' in the placeholder
    axios.get('http://hn.algolia.com/api/v1/search?query={this.state.search}&tags=story')
    .then(res => {
      const arrayOfStories = res.data.hits
      this.setState({arrayOfStories});
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input style={{color:"red", fontSize:"50px"}} id='search' value={this.state.search} onChange={this.handleInput}></input>

      </form>
        {this.state.arrayOfStories.map(story => {
          return (
            <div>
              <ol style={{backgroundColor:"yellow", fontSize:"15px"}}>
                <li key={story.title}>{story.title}</li>
                <li key={story.author}>{story.author}</li>
                <li key={story.create_at}>{story.created_at}</li>
                <li key={story.url}>{story.url}</li>
              </ol>
            </div>
          );
        })}
      </div>
    )
  }

  
}

  export default Stories