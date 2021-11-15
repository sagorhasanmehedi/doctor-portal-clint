import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/doctor")
      .then((res) => res.json())
      .then((data) => setdoctors(data));
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {doctors.map((D) => (
          <Grid item md={4}>
            <img
              src={"data:image/jpeg;base64," + `${D.image}`}
              alt=""
              srcset=""
              style={{ width: "100%" }}
            />
            <h3>Name: {D.name}</h3>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Doctors;
