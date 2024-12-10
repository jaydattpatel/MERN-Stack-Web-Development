import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";
import { noteActions } from "./noteReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // defining extraReducer to trigger callback when action is done of specific reducer
  extraReducers: (builder) => {
    builder
      // adding action and function. when action is completed then function execute.
      .addCase(todoActions.add, (state, action) => {
        state.message = "Todo is created";
        console.log(action);
      })
      .addCase(noteActions.add, (state, action) => {
        state.message = "Note is created";
        console.log(action);
      });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelector = (state) => state.notificationReducer;
