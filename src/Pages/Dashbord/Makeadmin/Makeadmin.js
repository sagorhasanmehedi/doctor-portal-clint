import { Alert, AlertTitle, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Useauth from "../../../Hook/Useauth";

const Makeadmin = () => {
  const [email, setemail] = useState("");
  const [condition, setcondition] = useState(false);
  const { token } = Useauth();

  const handelemail = (e) => {
    setemail(e.target.value);
  };
  const handelsumbit = (e) => {
    const data = { email };
    fetch("https://still-stream-94393.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        authorization: `Berar ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setcondition(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Make A Admin</h1>

      <form onSubmit={handelsumbit}>
        <TextField
          sx={{ width: "30%", mb: 5 }}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          onBlur={handelemail}
        />{" "}
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {condition && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Makeadmin;
