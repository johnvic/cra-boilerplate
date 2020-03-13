import React from "react";
import { Route } from "react-router-dom";
import "./index.less";

const DefaultLayout = props => {
  return (
    <>
      Default
      {props.children}
    </>
  );
};

export default ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);
