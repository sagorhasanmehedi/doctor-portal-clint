import React from "react";
import Grid from "@mui/material/Grid";
import Calender from "../../Shared/Calender/Calender";
import Dappiontment from "../Dappointment/Dappiontment";
import { Box } from "@mui/system";

const DHompage = () => {
  const [date, setdate] = React.useState(new Date());
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Calender date={date} setdate={setdate} />
        </Grid>
        <Grid item xs={6}>
          <Dappiontment date={date} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DHompage;
