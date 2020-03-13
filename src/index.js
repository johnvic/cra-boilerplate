import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";

// Remove the apollo-boost import and change to this:
import ApolloClient from "apollo-client";
// Setup the network "links"
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

// Main css
import "./main.less";

// Authentication
import { isAuthenticated } from "./utils/auth-helpers";

// Layouts
import DefaultLayout from "./layouts/default";
import LoginLayout from "./layouts/login";

// Components
import Login from "./components/login";
import Dashboard from "./components/dashboard";

// routes ACL
import RouteBaseComponent from "./shared-components/route-base-component";
// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();

ReactDOM.render(
  <div className="container-fluid">
    <div className="row app-container">
      <Router history={history}>
        <Switch>
          <DefaultLayout
            exact
            path="/dashboard"
            component={RouteBaseComponent([isAuthenticated], Dashboard)}
          />
          <LoginLayout
            exact
            path="/login"
            component={RouteBaseComponent([isAuthenticated], Login)}
          />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
