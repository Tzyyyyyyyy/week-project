import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import One from "../../pages/myOne";
import Two from "../../pages/myTwo";
import "./index.css"

class Content extends Component {
  render() {
    return (
        <main className="content">
          <Switch>
            <Route path="/one" component={One}></Route>
            <Route path="/two" component={Two}></Route>
          </Switch>
        </main>
    );
  }
}

export default Content;