import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    { id: 1, title: "Tech Conference", description: "Latest tech trends" },
    { id: 2, title: "Music Concert", description: "Live music event" },
  ],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer;
