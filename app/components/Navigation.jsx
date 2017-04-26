import React from 'react';
import {Link} from 'react-router-dom';

export class Navigation extends React.Component 
{
  constructor(props)
  {
    super(props);
  }

  render () 
  {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><Link to='/'>Boilerplate</Link></li>
            <li><Link to='/Hello'>Hello</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Vince Ly</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;