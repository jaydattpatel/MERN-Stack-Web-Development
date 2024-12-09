import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      createdOn: new Date().toDateString(),
    },
    {
      text: "Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.",
      createdOn: new Date().toDateString(),
    },
  ],
};

// creating slice with slice name, initialState value and reducer with actions
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    // this is add action
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toDateString(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

// exporting reducer
export const noteReducer = noteSlice.reducer;
// exporting actions
export const noteActions = noteSlice.actions;
// exporting selector
export const noteSelector = (state) => state.noteReducer;
