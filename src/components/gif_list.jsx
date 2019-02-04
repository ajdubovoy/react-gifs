import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return(
    <div className="gift-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectedGif={props.selectedGif} />)}
    </div>
  );
} 

export default GifList;
