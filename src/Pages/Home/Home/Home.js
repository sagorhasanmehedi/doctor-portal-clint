import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Apoinment from "../Apointment/Apoinment";
import Benner from "../Baner/Benner";
import Contucus from "../Contucus/Contucus";
import Doctors from "../Doctors/Doctors";
import Exceptional from "../Exceptional/Exceptional";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Benner />
      <Services />
      <Exceptional />
      <Apoinment />
      <Testimonial />
      <Contucus />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;
