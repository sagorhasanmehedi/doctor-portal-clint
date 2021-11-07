import { Box } from "@mui/system";
import React from "react";
import "./Contucus.css";
import bg from "../../../images/appointment-bg.png";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

const input = {
  backgroundColor: "white",
};

const Contucus = () => {
  return (
    <Box
      className="contact-us-parent"
      style={{ backgroundImage: `url(${bg})` }}
      sx={{ py: 13 }}
    >
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="h6"
        gutterBottom
        component="div"
        className="contacts-us"
      >
        CONTACTS US
      </Typography>
      <Typography
        sx={{ fontWeight: 500, mb: 7, color: "white" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Always Contacts With us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: 630, mb: 2 }}
          id="outlined-basic"
          label="Email Addres"
          variant="outlined"
          InputProps={{
            style: {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          sx={{ width: 630, mb: 2 }}
          id="outlined-basic"
          label="Subject "
          variant="outlined"
          InputProps={{
            style: {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          className="text-field"
          sx={{ width: 630, mb: 4 }}
          id="outlined-basic"
          label="Your Message "
          variant="outlined"
          InputProps={{
            style: {
              padding: "50px",
              backgroundColor: "white",
            },
          }}
        />
        <button className="form-submit">SUBMIT</button>
      </Box>
    </Box>
  );
};

export default Contucus;
