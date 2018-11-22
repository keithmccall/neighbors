import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./containers/shared/Layout";
import LandingContainer from "./containers/landing/LandingContainer";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <LandingContainer {...props} />}
        />

        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}

export default App;
