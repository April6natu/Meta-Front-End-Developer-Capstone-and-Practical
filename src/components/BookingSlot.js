import React from "react";

function BookingSlot({ time, guests, occasion }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "5px",
    }}>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Guests:</strong> {guests}</p>
      <p><strong>Occasion:</strong> {occasion}</p>
    </div>
  );
}

export default BookingSlot;
