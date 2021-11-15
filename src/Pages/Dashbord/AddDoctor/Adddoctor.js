import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, Input, Stack, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";

const Adddoctor = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [file, setfile] = useState("");

  const handelsubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    if (!file) {
      return;
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("file", file);

    fetch("http://localhost:7000/image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId > 0) {
          console.log("add new doctor sucessful");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Add A New Doctor</h1>
      <form onSubmit={handelsubmit}>
        <TextField
          sx={{ width: "20%", mb: 1 }}
          label="Name"
          variant="standard"
          onBlur={(e) => setname(e.target.value)}
        />{" "}
        <br />
        <TextField
          sx={{ width: "20%", mb: 1 }}
          label="Email"
          variant="standard"
          onBlur={(e) => setemail(e.target.value)}
        />
        <br />
        <Input
          onBlur={(e) => setfile(e.target.files[0])}
          sx={{ width: "20%", mb: 1 }}
          accept="file/*"
          type="file"
        />{" "}
        <br />
        <Button type="submit" sx={{ mt: 2 }} variant="contained">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default Adddoctor;
