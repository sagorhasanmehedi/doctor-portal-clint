import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import chair from "../../../images/chair.png";
import Calender from "../../Shared/Calender/Calender";
import "./Appiontmentheader.css";

const Appionmentheader = ({ date, setdate }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Calender date={date} setdate={setdate}></Calender>
          </Grid>
          <Grid item xs={7}>
            <img className="appionment-image" src={chair} alt="" srcset="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Appionmentheader;
