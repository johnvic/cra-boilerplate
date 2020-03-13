import React from "react";
import { Route } from "react-router-dom";
import "./index.less";

const LoginLayout = props => {
  return <div className="login-wrapper">{props.children}</div>;
};

export default ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <LoginLayout>
        <Component {...props} />
      </LoginLayout>
    )}
  />
);
