import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="left-panel">
        <Searchbar />
      </div>
    );
  }
}

export default App;
