import React from "react";
import ThankYou from "../assets/illustration-thank-you.svg";

export default function SubmittedModal({ rate, onRate }) {
  return (
    <div className="submitted">
      <img src={ThankYou} alt="Thank You" />
      <p className="selected">
        You selected out <span>{rate}</span> of 5
      </p>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
