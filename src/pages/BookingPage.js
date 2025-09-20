import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <main aria-labelledby="booking-heading">
      <h1 id="booking-heading">Reserve Your Table</h1>
      <BookingForm />
    </main>
  );
}

export default BookingPage;
