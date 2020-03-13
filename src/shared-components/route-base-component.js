import React, { useState } from "react";
import { withRouter } from "react-router-dom";

/* @middlewares
 * array of functions that needs to be executed before rendering the WrapComponents
 *
 * @WrapComponent
 * component that will be rendered
 */

const RouteBaseComponent = (middlewares, WrapComponent) => {
  const Component = props => {
    const [customArr, setCustomArr] = useState(middlewares);
    const [loading, setLoading] = useState(true);

    while (customArr.length) {
      if (!customArr.shift().call(this, props)) {
        setLoading(!(props.match.path === "/login"));
        break;
      }
      setLoading(false);
    }

    if (loading) {
      return <div>Temporary</div>;
    }
    return <WrapComponent {...props} />;
  };

  return withRouter(Component);
};

export default RouteBaseComponent;
