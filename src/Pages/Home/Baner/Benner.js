import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import img from "../../../images/chair.png";
import Container from "@mui/material/Container";
import bg from "../../../images/bg.png";

const Benner = () => {
  const gridstyle = {
    border: "2px solid red",
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            style={{ display: "flex", alignItems: "center", height: "700px" }}
            item
            xs={6}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 500, textAling: "left" }}
                variant="h3"
              >
                Your New Smile <br /> Start Here
              </Typography>
              <Typography sx={{ color: "gray", my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Magnam quasi placeat porro, est dicta nesciunt veniam <br />{" "}
                Neque optio Lorem ipsum dolor, sit amet consectetur
              </Typography>
              <Button variant="contained">Get Appiontment</Button>
            </Box>
          </Grid>

          <Grid
            style={{ display: "flex", alignItems: "center", height: "700px" }}
            item
            xs={6}
          >
            <Box>
              <img style={{ width: "550px" }} src={img} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Benner;
