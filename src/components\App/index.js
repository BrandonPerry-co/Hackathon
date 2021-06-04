import {component} from "react";

export default class App extends Component {
  //props - what we receive 
  constructor(props) {
    super(props);

    //state - local storage
    this.state = { }; // has to be an object 
  }

  componentDidMount(){
    //call axios get to recieve stories array
    axios.get('http://hn.algolia.com/api/v1/search?query=story')
    .then (response => response.date)
    then(data => this.setState({story: data}));
  }


  //render - what get display 
  //JSX 
  //who translate JSX - babel to React elements
  render() {
  const{ story } = this.state;
      return (
      <div> 
        {story.map(story =>{
          return (
            // <ul>
            //  <li>{beer.name}</li>
            //  <li>{beer.description}</li>
            //  <li>IBU:{beer.ibu}</li>
            // </ul>
          )
        })}
      </div>
    );
  )
}