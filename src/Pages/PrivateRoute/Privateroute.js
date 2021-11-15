import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import Useauth from "../../Hook/Useauth";

const Privateroute = ({ children, ...rest }) => {
  const { user, isloding } = Useauth();
  if (isloding) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
