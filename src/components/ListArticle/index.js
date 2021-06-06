import React from 'react'
import Stories from './components/Stories';

const ListArticle = (props) => {

  render() {

    return (
      <div>
        {this.state.arrayOfStories.map(story => {
          return (
            <div>
              <ol>
                <li key={title}>{story.title}</li>
                <li key={author}>{story.author}</li>
                <li key={create_at}>{story.created_at}</li>
                <li key={tag}>{story.tag}</li>
              </ol>
            </div>
          );
        })}
      </div>
    )
  };
}


export default ListArticle