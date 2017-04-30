import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Navigation from 'Navigation';
import Main from "Main";
import HelloWorld from 'HelloWorld';
import About from "About";

export class App extends React.Component 
{
  render()
  {
    return (
      <Router>
      <div>
        <Navigation/>
        <div className="container">
          <div className='row'>
            <div className="col"/>
            <div className="col-6">
              <Route exact={true} path="/" component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/hello" component={HelloWorld}/>
            </div>
            <div className="col"/>
          </div>
        </div>
      </div>
    </Router>
    )
  }
}

export default App;