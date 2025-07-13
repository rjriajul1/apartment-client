import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const CheckoutForm = ({ orderData, rent,status }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate()


  useEffect(() => {
    const fetchClientSecret = async () => {
      const res = await axiosSecure.post("/create-payment-intent", {
        agreementId: orderData?.apartmentId,
      });
      setClientSecret(res?.data?.clientSecret);
    };
    fetchClientSecret();
  }, [axiosSecure, orderData]);

  const handleSubmit = async (event) => {
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    } else {
      setError(null);

      // cutting money

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if (result?.error) {
        setError(result?.error.message);
        return;
      }

      if (result?.paymentIntent.status === "succeeded") {
        orderData.transactionId = result?.paymentIntent?.id;
        try {
          const { data } = await axiosSecure.post("/payment", orderData);
          if (data?.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "You payment successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/dashboard/paymentHistory')
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setProcessing(false);
          setError(null);
        }
      }
    }
  };
  return (
    <div>
      <form className="shadow-2xl rounded-2xl p-4" onSubmit={handleSubmit}>
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
        {error && <p className="text-red-500 py-2 text-center">{error}</p>}
        <button
          className="btn btn-primary w-full mt-6"
          type="submit"
          disabled={!stripe || processing || status === "pending" || status === 'reject'}
        >
          {processing ? <ClipLoader size={22} /> : `Pay ${rent} Tk`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
