import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";

// creating store by passing reducer
export const store = redux.createStore(todoReducer);
