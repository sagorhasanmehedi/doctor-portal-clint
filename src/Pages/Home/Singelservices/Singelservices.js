import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Singalecard.css";

const Singelservices = ({ services }) => {
  const { name, img, dis } = services;
  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
        <CardMedia
          component="img"
          height="110"
          image={img}
          alt="green iguana"
          style={{ width: "auto", margin: "auto" }}
        />
        <CardContent sx={{ textAlign: "center", p: 3 }}>
          <Typography
            sx={{ m: 3, fontWeight: 500 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: 15 }}
            variant="body2"
            color="text.secondary"
          >
            {dis}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Singelservices;
