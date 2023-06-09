import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';
import "./App.css"

export default class App extends Component {
  render() {
    return (
        <div className="app">
          <Header/>
          <Content/>
          <Footer/>
        </div>
    )
  }
}
