import "./ToDoForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../redux/reducers/todoReducer";
import {
  notificationActions,
  notificationSelector,
} from "../../redux/reducers/ExtraNotificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  //using useDispatch to perform action
  const dispatch = useDispatch();

  const { message } = useSelector(notificationSelector);
  if (message) {
    setTimeout(() => {
      dispatch(notificationActions.reset());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // passing action with parameters
    dispatch(todoActions.add(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
