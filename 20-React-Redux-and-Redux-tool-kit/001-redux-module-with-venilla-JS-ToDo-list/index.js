// importing redux
import * as redux from "redux";

// defining action types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action creators
const addTodo = (text) => ({ type: ADD_TODO, text });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

// initial state
const initialState = {
  todos: [],
};

// reducer
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

const store = redux.createStore(todoApp);

// dispatch actions
store.dispatch(addTodo("Learn Redux"));
store.dispatch(addTodo("Build an app"));
store.dispatch(toggleTodo(0));

// get the current state
console.log(store.getState());
