
import React from 'react';

export default class Form extends React.Component {

  render () {
    return (
      <form>
        <input type="text"
        placeholder="Enter topic"
        required/>

        <button>Search</button>
        </form>
    );
  }

}