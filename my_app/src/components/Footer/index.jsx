import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <div className="copyright">
            © 2023 My Website. All rights reserved.
          </div>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </footer>
    );
  }
}

export default Footer;