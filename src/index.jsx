import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './components/App';

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

const rootElement = document.getElementById('app');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <div>
        <Component/>
      </div>
    </AppContainer>,
  rootElement
);
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => { 
    console.log('Call to render function');
    render(App)
  });
}