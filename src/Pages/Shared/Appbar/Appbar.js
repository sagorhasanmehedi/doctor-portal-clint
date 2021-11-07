import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import Useauth from "../../../Hook/Useauth";

const Appbar = () => {
  const { user, logout } = Useauth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          {user.email && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.email}
            </Typography>
          )}
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/appionment"
          >
            <Button color="inherit">Appionment</Button>
          </Link>
          {user.email ? (
            <Button
              style={{ color: "white", textDecoration: "none" }}
              onClick={logout}
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <NavLink
              style={{
                color: "white",
                margin: "0 20px",
                textDecoration: "none",
              }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}

          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/dashbord"
          >
            <Button color="inherit">Dashbord</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
