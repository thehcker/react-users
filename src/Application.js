import React, { Component } from "react";
import "./css/styles.css";
import Login from "./auth/Login";
import Account from "./auth/Account";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overTen: false
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
        </div>
      </Router>
    );
  }
}

export default Application;
