import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/ExtraNotificationReducer";

// creating store with multiple reducer
export const store = configureStore({
  reducer: {
    notificationReducer,
    noteReducer,
    todoReducer,
  },
});
