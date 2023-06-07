import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.css"

class Header extends Component {
  render() {
    return (
        <header className="header">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/one">计算器</Link>
              </li>
              <li className="nav__item">
                <Link to="/two">航班地图</Link>
              </li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;