import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Singelservices from "../Singelservices/Singelservices";
import { Typography } from "@mui/material";
import "./Services.css";

const services = [
  {
    name: "Flurid Tretment",
    img: "https://i.ibb.co/K6NWcF8/cavity.png",
    dis: "To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.",
  },
  {
    name: "Cavity Filing",
    img: "https://i.ibb.co/VgnHTQP/fluoride.png",
    dis: "To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.",
  },
  {
    name: "Teate Whaitning",
    img: "https://i.ibb.co/DRHFrc1/whitening.png",
    dis: "To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Container>
        <Typography
          className="ourservices"
          sx={{ textAlign: "center", mb: 3 }}
          variant="h5"
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h3"
          className="we-provided"
          sx={{ textAlign: "center", fontWeight: 600, mb: 13 }}
        >
          SERVICES WE PROVAID
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 7, sm: 10, md: 12 }}
        >
          {services.map((_, index) => (
            <Grid item xs={7} sm={5} md={4} key={index}>
              <Singelservices services={_} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
