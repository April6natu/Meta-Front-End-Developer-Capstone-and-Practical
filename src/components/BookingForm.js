import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table reservation form">
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="20"
          value={formData.guests}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <button type="submit" className="btn" aria-label="Confirm your reservation on click">
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;
