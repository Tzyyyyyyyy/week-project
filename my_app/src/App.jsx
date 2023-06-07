import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import {Link} from "react-router-dom";
import "./App.css"

export default class App extends Component {
  render() {
    return (
        <div className="app">
          <Header>
            <button><Link to="/one">one</Link></button>
            <button><Link to="/two">two</Link></button>
          </Header>
          <Content/>
          <Footer/>
        </div>
    )
  }
}
