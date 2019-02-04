import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <div>
      <div className="left-scene"></div>
      <div className="right-scene"></div>
    </div>
  );
}
