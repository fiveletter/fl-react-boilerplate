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
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <span className="navbar-brand" href="#">
          <Link className="nav-link" to='/'>Boilerplate</Link>
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/Hello'>Hello</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;