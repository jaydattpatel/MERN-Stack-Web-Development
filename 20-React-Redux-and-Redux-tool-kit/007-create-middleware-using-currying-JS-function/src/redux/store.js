import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/ExtraNotificationReducer";
import {
  actionLoggerMiddleware,
  dataLoggerMiddleware,
} from "./middlewares/loggerMiddleware";

// creating store with multiple reducer
export const store = configureStore({
  reducer: {
    notificationReducer,
    noteReducer,
    todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const list = getDefaultMiddleware().concat([
      actionLoggerMiddleware,
      dataLoggerMiddleware,
    ]);
    return list;
  },
});
