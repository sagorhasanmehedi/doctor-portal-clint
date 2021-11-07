import React, { useState } from "react";
import login from "../../images/login.png";
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import Passwordmodal from "../Shared/Passwordmodal/Passwordmodal";
import Useauth from "../../Hook/Useauth";

const Register = () => {
  const [userdata, setuserdata] = useState({});
  const { user, createacount, isloding, erroemessage } = Useauth();

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();

  const handelonBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restdata = { ...userdata };
    restdata[name] = value;
    setuserdata(restdata);
  };

  const handelsbmit = (e) => {
    if (userdata.password !== userdata.password2) {
      handleOpen();
      return;
    }

    createacount(userdata.email, userdata.password, userdata.name, history);
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid sx={{ mt: 20 }} item xs={12} sm={12} md={6} lg={6}>
            {!isloding && (
              <form onSubmit={handelsbmit}>
                <Paper sx={{ py: 10, width: "80%" }} elevation={3}>
                  <Typography
                    sx={{ mb: 10 }}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    REGISTER
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onBlur={handelonBlur}
                    variant="standard"
                    sx={{ width: "75%", mb: 3 }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onBlur={handelonBlur}
                    variant="standard"
                    sx={{ width: "75%", mb: 3 }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Your Passsword"
                    variant="standard"
                    name="password"
                    onBlur={handelonBlur}
                    sx={{ width: "75%", mb: 5 }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Re-Enter Passsword"
                    variant="standard"
                    name="password2"
                    onBlur={handelonBlur}
                    sx={{ width: "75%", mb: 5 }}
                  />
                  <br />
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    <Button variant="text">Alreaday Have A Acount?</Button>
                  </NavLink>
                  <br />

                  <button type="submit" className="loginbutton">
                    REGISTER
                  </button>
                </Paper>
              </form>
            )}

            {isloding && <CircularProgress />}
            {user.email && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
            )}

            {erroemessage && (
              <Alert variant="filled" severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img width="130%" src={login} alt="" srcset="" />
          </Grid>
        </Grid>
      </Container>
      <Passwordmodal handleClose={handleClose} open={open} />
    </>
  );
};

export default Register;
