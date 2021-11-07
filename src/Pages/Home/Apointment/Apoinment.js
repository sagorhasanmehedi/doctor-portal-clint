import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import { Typography } from "@mui/material";
import bg from "../../../images/appointment-bg.png";
import "./Appointment.css";

const Apoinment = () => {
  const style = {
    backgroundImage: `url(${bg})`,
    marginTop: "300px",
    backgroundPosition: "center",
  };
  return (
    <Box style={style} className="appointment-parent" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img
            style={{ width: 678, marginTop: "-178px", marginBottom: -4 }}
            src={doctor}
            alt=""
            srcset=""
          />
        </Grid>
        <Grid
          sx={{
            textAling: "left",
            display: "flex",
            alignItems: "center",
            pl: 30,
          }}
          item
          xs={12}
          md={8}
        >
          <Typography
            sx={{
              textAlign: "left",
              pl: 20,
            }}
          >
            <Box>
              <Typography
                style={{ color: "#34bfbd" }}
                sx={{ fontWeight: 600 }}
                variant="h6"
              >
                APPOINTMENT
              </Typography>
              <Typography
                style={{ color: "white" }}
                sx={{ fontWeight: 500, my: 3 }}
                variant="h2"
              >
                Make an appointment <br /> Today
              </Typography>
              <Typography
                style={{ color: "white" }}
                sx={{ my: 3, fontWeight: 300 }}
                variant="h6"
              >
                The Graham Cancer Center features unique multidisciplinary care
                that <br /> includes a team of specialists whom you can see all
                in one visit.
              </Typography>
              <button style={{ marginTop: "10px" }} className="form-submit">
                Lern More
              </button>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Apoinment;
