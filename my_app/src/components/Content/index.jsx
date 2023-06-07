import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import myOne from "../../pages/myOne";
import myTwo from "../../pages/myTwo";
import "./index.css"

class Content extends Component {
  render() {
    return (
        <main className="content">
          <Switch>
            <Route path="/one" component={myOne}></Route>
            <Route path="/two" component={myTwo}></Route>
          </Switch>
        </main>
    );
  }
}

export default Content;