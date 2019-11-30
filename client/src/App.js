import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Fib from "./Fib";
import OtherPage from "./OtherPage";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <Link to="/" style={{ marginRight: 20 }}>
              Home
            </Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Route exact path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
