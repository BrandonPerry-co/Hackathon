import React from 'react';

const ListArticle = (props) => {
  
  render() { 
    const {title, author, date, tag} = this.props;
    return (
      <div className="story-container">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{date}</p>
        <p>{tag}</p>

      </div>
     );
  }
}

export default ListArticle