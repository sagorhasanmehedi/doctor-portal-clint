import React from "react";
import Appionmentbody from "./Appionmentbody/Appionmentbody";
import Appionmentheader from "./Appionmentheader/Appionmentheader";
import Appbar from "../Shared/Appbar/Appbar";
import Footer from "../Shared/Footer/Footer";

const Appionment = () => {
  const [date, setdate] = React.useState(new Date());

  return (
    <div>
      <Appbar />
      <Appionmentheader date={date} setdate={setdate} />
      <Appionmentbody date={date} setdate={setdate} />
      <Footer />
    </div>
  );
};

export default Appionment;
