import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";

// creating store with multiple reducer
export const store = configureStore({
  reducer: {
    noteReducer,
    todoReducer,
  },
});
