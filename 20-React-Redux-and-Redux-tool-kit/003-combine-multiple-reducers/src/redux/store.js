import * as redux from "redux";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";

// combining multiple reducer to create store
const reducer = redux.combineReducers({
  todoReducer,
  noteReducer,
});

// creating store by passing combine reducer
export const store = redux.createStore(reducer);
