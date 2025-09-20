import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("shows error when guests are less than 1", () => {
  render(<BookingForm onSubmit={() => {}} />);

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "0" } });

  expect(screen.getByText(/must be at least 1/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /make your reservation/i }))
    .toBeDisabled();
});

test("enables submit button with valid inputs", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  // Fill all fields correctly
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-09-20" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  const submitBtn = screen.getByRole("button", { name: /make your reservation/i });
  expect(submitBtn).not.toBeDisabled();

  fireEvent.click(submitBtn);
  expect(handleSubmit).toHaveBeenCalledWith({
    date: "2025-09-20",
    time: "18:00",
    guests: "2",
    occasion: "Birthday",
  });
});
