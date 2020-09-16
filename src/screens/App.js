import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import Profile from "./profile/Profile";

class App extends Component {
  baseUrl = "https://graph.instagram.com/";

  render() {
    return (
      <Router>
        <div className="main-container">
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} baseUrl={this.baseUrl} />}
          />
          <Route
            exact
            path="/home"
            render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} baseUrl={this.baseUrl} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
