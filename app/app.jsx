import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom'

import Navigation from 'Navigation'
import Main from "Main"
import HelloWorld from 'HelloWorld'
import About from "About"

// Load foundation
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router>
      <div>
        <Navigation/>
        <div className='row'>
          <div className="columns small-centered medium-6 large-4">
            <Route exact={true} path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/hello" component={HelloWorld}/>
          </div>
        </div>
      </div>
  </Router>,
  document.getElementById('app')
);