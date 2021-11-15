import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Alert, AlertTitle, Container, Typography } from "@mui/material";
import Booking from "../Booking/Booking";

const Appionmentbody = ({ date, setdate }) => {
  const [condition, setcondition] = useState(false);
  const bookings = [
    {
      id: 1,
      name: "Teeth Orthodonics",
      time: "08.00 AM - 09.00 AM",
      space: 10,
      price: 200,
    },
    {
      id: 2,
      name: "Cosmetic Dentistry",
      time: "09.00 AM - 10.00 AM",
      space: 8,
      price: 33,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "10.00 AM - 11.00 AM",
      space: 9,
      price: 45,
    },
    {
      id: 4,
      name: "Cavity Protection",
      time: "11.00 AM - 12.00 PM",
      space: 5,
      price: 100,
    },
    {
      id: 5,
      name: "Pediatric Dental",
      time: "06.00 PM - 07.00 PM",
      space: 10,
      price: 17,
    },
    {
      id: 6,
      name: "Oral Surgery",
      time: "07.00 PM - 08.00 PM",
      space: 10,
      price: 20,
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>
        Available Appointments on {date.toDateString()}
      </Typography>
      {condition && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            date={date}
            booking={booking}
            setcondition={setcondition}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default Appionmentbody;
