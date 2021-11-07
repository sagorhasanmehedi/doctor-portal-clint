import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import Useauth from "../../Hook/Useauth";

const Adminroute = ({ children, ...rest }) => {
  const { user, isloding, admin } = Useauth();

  if (isloding) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
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

export default Adminroute;
