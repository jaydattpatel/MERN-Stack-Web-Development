import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

// creating reducer
export function todoReducer(state = initialState, action) {
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
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
