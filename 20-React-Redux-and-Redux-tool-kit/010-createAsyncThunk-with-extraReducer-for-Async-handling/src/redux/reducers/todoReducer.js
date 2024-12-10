import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

// creating AsyncThunk function for async apis and for create action
export const getTodoInitialState = createAsyncThunk(
  "todo/getInitialState",
  async (agrs, thunkAPI) => {
    // console.log("args :", agrs);
    // return promise to extraReducer
    return axios("https://dummyjson.com/todos/random/5");
  }
);

// creating slice with slice name, initialState value and reducer with actions
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // this is add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    // when returned promise is fulfilled this function will execute and data pass to action.payload
    builder.addCase(getTodoInitialState.fulfilled, (state, action) => {
      console.log(action);
      const data = action.payload.data;

      data.forEach((element) => {
        element.text = element.todo;
      });
      state.todos = data;
    });
  },
});

// exporting reducer
export const todoReducer = todoSlice.reducer;
// exporting actions
export const todoActions = todoSlice.actions;
// exporting selector
export const todoSelector = (state) => state.todoReducer;
