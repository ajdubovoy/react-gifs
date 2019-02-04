import React, { Component } from 'react';
import giphy from 'giphy-api';
import GifList from './gif_list';
import Gif from './gif';
import Searchbar from './searchbar';

const GIPHY_API_KEY = 'Pvw63B6n65rbmi1fbjUayTaHwRx4QD6f';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <Searchbar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.state.selectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
