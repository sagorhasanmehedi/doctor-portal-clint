import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Bookingmodal from "../Bookingmodal/Bookingmodal";

const Booking = ({ booking, date, setcondition }) => {
  const { price, name, space, time } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>

          <Typography variant="body1" display="block" gutterBottom>
            Price : ${price}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <Bookingmodal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        booking={booking}
        date={date}
        setcondition={setcondition}
      />
    </>
  );
};

export default Booking;
