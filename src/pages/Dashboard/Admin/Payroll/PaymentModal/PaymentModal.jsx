import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CheckoutForm = ({ payment, closeModal,refetch }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
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
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          date: new Date().toISOString(),
          transactionId: paymentIntent.id,
        };
        const result = await axiosSecure.patch(
          `/payments/${payment._id}`,
          paymentInfo
        );

        if (result.data.modifiedCount > 0) {
            toast.success("Payment Completed successfully");
            refetch();
          closeModal();
        }
      }
      }
      setIsSubmitting(false);
  };

  useEffect(() => {
    if (payment?.salary) {
      axiosSecure
      .post("/create-payment-intent", { bill: payment?.salary })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
   
  }, [axiosSecure, payment?.salary]);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontFamily: '"Roboto", sans-serif',
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#1D1F67",
              },
            },
            invalid: {
              fontFamily: '"Roboto", sans-serif',
              color: "#9e2146",
            },
          },
        }}
      />
      <Button
        className="w-full mt-6 bg-primary-1"
        type="submit"
        disabled={!stripe || !clientSecret || isSubmitting}
      >
        Pay
      </Button>
      <p className="text-xs text-red-500">{error}</p>
    </form>
  );
};

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Separator } from "@/components/ui/separator";
import { useContext, useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";
import { toast } from "react-toastify";
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const PaymentModal = ({ isOpen, payment, closeModal,refetch }) => {
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogContent
          className="sm:max-w-[425px] bg-banner"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="text-center">Payment</DialogTitle>
            <h3 className="text-center text-primary-2 font-semibold text-xl">
              Total Payment: ${payment?.salary}
            </h3>
            <Separator className="my-4" />
          </DialogHeader>
          <Elements stripe={stripePromise}>
            <CheckoutForm payment={payment} closeModal={closeModal} refetch={refetch} />
          </Elements>
          <Button onClick={closeModal} className="bg-primary-2 -mt-2 w-full">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentModal;
