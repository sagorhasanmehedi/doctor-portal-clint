import React, { useRef, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { grid } from "@mui/system";
import Useauth from "../../../Hook/Useauth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 7,
};

const Bookingmodal = ({ handleClose, open, booking, date, setcondition }) => {
  const { user } = Useauth();

  const restdata = {
    patientname: user.displayName,
    email: user.email,
    phonenumber: "",
  };

  const [patientdata, setpatientdata] = useState(restdata);

  const handelchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const copydata = { ...patientdata };
    copydata[name] = value;
    setpatientdata(copydata);
  };

  const handelsubmit = (e) => {
    const fulldata = { ...patientdata };

    fulldata.tlme = booking.time;
    fulldata.date = date.toLocaleDateString();
    fulldata.services = booking.name;

    fetch("https://still-stream-94393.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fulldata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setcondition(true);
          handleClose();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{ mb: 3 }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {booking.name}
            </Typography>
            <form onSubmit={handelsubmit}>
              <TextField
                disabled
                sx={{
                  width: "350px",
                  m: 1,
                }}
                id="outlined-basic"
                label={booking.time}
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "350px",
                  m: 1,
                }}
                id="outlined-size-small"
                defaultValue={user.displayName}
                variant="outlined"
                onBlur={handelchange}
                name="patientname"
              />

              <TextField
                sx={{
                  width: "350px",
                  m: 1,
                }}
                id="outlined-size-small"
                defaultValue={user.email}
                variant="outlined"
                onBlur={handelchange}
                name="email"
              />
              <TextField
                sx={{
                  width: "350px",
                  m: 1,
                }}
                id="outlined-size-small"
                defaultValue="Phone Number"
                variant="outlined"
                onBlur={handelchange}
                name="phonenumber"
              />

              <TextField
                sx={{
                  width: "350px",
                  m: 1,
                }}
                disabled
                id="outlined-basic"
                label={date.toDateString()}
                variant="outlined"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                }}
              >
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Bookingmodal;
