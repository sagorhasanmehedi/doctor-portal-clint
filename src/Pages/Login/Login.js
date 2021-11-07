import React, { useState } from "react";
import "./Login.css";
import login from "../../images/login.png";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Useauth from "../../Hook/Useauth";

const Login = () => {
  const [userdata, setuserdata] = useState({});
  const { signin, googlelogin } = Useauth();

  const location = useLocation();
  const history = useHistory();
  const handelonchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restdata = { ...userdata };
    restdata[name] = value;
    setuserdata(restdata);
  };

  const googlebutton = () => {
    googlelogin(location, history);
  };

  const handelsbmit = (e) => {
    signin(userdata.email, userdata.password, location, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid sx={{ mt: 20 }} item xs={12} sm={12} md={6} lg={6}>
          <form onSubmit={handelsbmit}>
            <Paper sx={{ py: 10, width: "80%" }} elevation={3}>
              <Typography
                sx={{ mb: 10 }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Login
              </Typography>
              <TextField
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handelonchange}
                variant="standard"
                sx={{ width: "75%", mb: 3 }}
              />
              <TextField
                id="standard-basic"
                label="Your Passsword"
                variant="standard"
                name="password"
                onChange={handelonchange}
                sx={{ width: "75%", mb: 5 }}
              />
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/rgister">
                <Button variant="text">New User?</Button>
              </NavLink>
              <br />

              <button type="submit" className="loginbutton">
                Log In
              </button>
              <br />

              <button onClick={googlebutton} className="loginbutton">
                Google Login
              </button>
            </Paper>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img width="130%" src={login} alt="" srcset="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
