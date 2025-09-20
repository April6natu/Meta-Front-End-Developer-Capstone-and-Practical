import { initializeTimes, timesReducer } from "../components/timesReducer";

test("initializeTimes returns default times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("timesReducer returns same times on UPDATE_DATE", () => {
  const initialState = [];
  const newState = timesReducer(initialState, { type: "UPDATE_DATE", date: "2025-09-19" });
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("timesReducer returns same state for unknown action", () => {
  const initialState = ["17:00"];
  const newState = timesReducer(initialState, { type: "UNKNOWN_ACTION" });
  expect(newState).toEqual(initialState);
});
