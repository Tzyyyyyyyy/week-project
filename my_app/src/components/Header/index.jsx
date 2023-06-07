import React, {Component} from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <h1 className="title">My Website</h1>
          <div className="buttons">
            <button className="button">Button 1</button>
            <button className="button">Button 2</button>
          </div>
        </header>
    );
  }
}

export default Header;