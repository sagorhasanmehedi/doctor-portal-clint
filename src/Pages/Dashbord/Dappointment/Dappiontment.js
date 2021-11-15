import React, { useEffect, useState } from "react";
import Useauth from "../../../Hook/Useauth";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Dappiontment = ({ date }) => {
  const { user } = Useauth();
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://still-stream-94393.herokuapp.com/appointments?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, [date]);

  return (
    <div>
      <h1>Appiontment</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Pay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientname}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {row.paymentinfo ? (
                    "Payid"
                  ) : (
                    <NavLink to={`/dashbord/payment/${row._id}`}>
                      <Button> Pay</Button>
                    </NavLink>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dappiontment;
