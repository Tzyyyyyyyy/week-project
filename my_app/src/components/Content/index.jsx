import React, {Component} from 'react';
import './index.css';

class Content extends Component {
  render() {
    return (
        <main className="content">
          <h2 className="subtitle">Welcome to My Website</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            sapien elit. In imperdiet, dolor eu maximus aliquet, sapien arcu
            condimentum elit, vitae posuere nibh velit sit amet velit. Sed sit
            amet lorem ligula. Nulla facilisi. Donec vel urna neque. Suspendisse
            consectetur, est at aliquam euismod, neque justo tempor purus, non
            bibendum enim dolor sed nisl.
          </p>
          <img src="https://via.placeholder.com/500x300" alt="placeholder"/>
        </main>
    );
  }
}

export default Content;