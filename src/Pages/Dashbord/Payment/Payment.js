import { Box } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51JvlnWAt5PMdpjXmijl0qzF8yGanGgMdoC8n0xYmLaaNZJ6Nw5pxaHoMvpOFpaHzEKq1XHlqQdCcrMtzTHfIwlnn003ggGAik4"
);

const Payment = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(`http://localhost:7000/payment/${id}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [id]);

  return (
    <Box sx={{ mt: 10 }}>
      <h1>
        payment id : {id} Price : {data.price}
      </h1>
      {data.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      )}
    </Box>
  );
};

export default Payment;
