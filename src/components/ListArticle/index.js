
export default class ListArticle extends Component {
  
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
 