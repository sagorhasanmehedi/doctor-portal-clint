import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Useauth from "../../../Hook/Useauth";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutForm = ({ data }) => {
  const { price } = data;
  const stripe = useStripe();
  const elements = useElements();
  const [error, seterror] = useState("");
  const [secret, setsecret] = useState("");
  const [success, setsuccess] = useState("");
  const [isloding, setisloding] = useState(false);
  const { user } = Useauth();

  useEffect(() => {
    fetch("http://localhost:7000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setsecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setisloding(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      seterror(error.message);
      setsuccess("");
      setisloding(false);
    } else {
      setisloding(false);
      seterror(" ");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: stripeError } =
      await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (stripeError) {
      console.log(stripeError);
      seterror(stripeError.message);
      setsuccess("");
    } else {
      console.log(paymentIntent);
      setsuccess("Payment Success");

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        client_secret: paymentIntent.client_secret.split("_secret_")[0],
      };
      //   send payment info
      fetch(`http://localhost:7000/paymentinfo/${data._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setisloding(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {isloding ? (
        <CircularProgress />
      ) : (
        <button type="submit" disabled={!stripe || success}>
          Pay ${price}
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "blue" }}>{success}</p>}
    </form>
  );
};

export default CheckoutForm;
