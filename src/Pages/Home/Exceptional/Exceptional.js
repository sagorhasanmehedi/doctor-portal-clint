import React from "react";
import "./Exceptional.css";
import treatment from "../../../images/treatment.png";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

const Exceptional = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 30,
        bgcolor: "background.paper",
        mt: 18,
      }}
    >
      <div>
        <img className="exceptional-img" src={treatment} alt="" srcset="" />
      </div>
      <Box
        sx={{ textAlign: "left", letterSpacing: 7, fontWeight: 900, ml: 15 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ letterSpacing: 2, fontWeight: 500 }}
          className="exceptional-heading"
        >
          Exceptional Dental <br /> Care, on Your Terms
        </Typography>
        <Typography
          className="exceptional-text"
          sx={{ my: 6 }}
          variant="body1"
          gutterBottom
        >
          This special offer is for first-timers who have not had a demo of
          YAPI. Please <br />
          note: YAPI integrates with Dentrix, Eaglesoft, Open Dental and
          Practice-Web. <br /> qualify for this Gift the Card offer, you in must
          be using one of these practice <br /> management software or in the
          process of opening a practice that will be using <br /> one of these
          options. You will receive an electronic gift card after you attend .
        </Typography>
        <button className="exceptional-button">Learn More</button>
      </Box>
    </Box>
  );
};

export default Exceptional;
