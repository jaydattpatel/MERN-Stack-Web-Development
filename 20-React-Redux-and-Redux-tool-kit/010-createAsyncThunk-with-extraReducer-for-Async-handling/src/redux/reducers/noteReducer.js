import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

// creating AsyncThunk function for async apis and for create action
export const getNoteInitialState = createAsyncThunk(
  "note/getInitialState",
  async (agrs, thunkAPI) => {
    // console.log("args :", agrs);
    // return promise to extraReducer
    return axios("https://dummyjson.com/quotes/random/5");
  }
);

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
  extraReducers: (builder) => {
    // when returned promise is fulfilled this function will execute and data pass to action.payload
    builder.addCase(getNoteInitialState.fulfilled, (state, action) => {
      console.log(action);
      const data = action.payload.data;
      data.forEach((element) => {
        element.text = element.quote;
        element.createdOn = new Date().toDateString();
      });
      state.notes = data;
    });
  },
});

// exporting reducer
export const noteReducer = noteSlice.reducer;
// exporting actions
export const noteActions = noteSlice.actions;
// exporting selector
export const noteSelector = (state) => state.noteReducer;
