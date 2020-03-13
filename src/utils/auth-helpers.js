import session from "./session";

export const isAuthenticated = props => {
  const { history, match } = props;

  if (session.get("token")) {
    if (match.path !== "/login") {
      history.replace({ pathname: match.url });
    } else {
      history.replace({ pathname: "/dashboard" });
    }
    return true;
  }

  // allow forgot and reset password routes
  if (
    match.path === "/reset-password/:token" ||
    match.path === "/forgot-password"
  ) {
    return true;
  }

  if (match.path !== "/login") {
    history.replace({ pathname: "/login" });
  }

  return true;
};
