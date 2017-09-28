import * as React from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header>
          <h1>reeedr</h1>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
          </ul>
        </header>
    );
  }
}

export default Header;
