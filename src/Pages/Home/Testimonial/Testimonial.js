import { CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import "./Testimonial.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pepole1 from "../../../images/people-1.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Testimonial = () => {
  return (
    <Container sx={{ my: 20 }}>
      <Typography sx={{ textAlign: "left", mb: 10 }}>
        <Typography
          sx={{ fontWeight: 700, mb: 2 }}
          variant="h5"
          gutterBottom
          component="div"
          className={"testimonial-heading"}
        >
          TESTIMONIAL
        </Typography>
        <Typography
          sx={{ fontWeight: 700 }}
          variant="h3"
          gutterBottom
          component="div"
        >
          What's Our Patients <br />
          Saye
        </Typography>
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paper elevation={3} sx={{ minWidth: 275, pt: 5, pb: 10, px: 3 }}>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 16 }}
                    component="div"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus facilis nesciunt a velit recusandae sit pariatur nisi
                    et
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    mt: 5,
                  }}
                >
                  <CardMedia
                    sx={{}}
                    component={"img"}
                    image={pepole1}
                    height="70"
                    style={{ width: "auto" }}
                  />
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{ fontWeight: 600, fontSize: 16 }}
                      gutterBottom
                      component="div"
                      className={"testimonial-heading"}
                    >
                      WINSON HERRY
                    </Typography>
                    <Typography variant="button" gutterBottom component="div">
                      Californaea
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
