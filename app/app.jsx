const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

import HelloWorld from 'HelloWorld'

// Load foundation
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <div>
    <HelloWorld/>
  </div>,
  document.getElementById('app')
);