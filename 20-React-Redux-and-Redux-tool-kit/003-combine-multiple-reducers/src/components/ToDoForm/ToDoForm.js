import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  //using useDispatch to perform action
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // passing action with parameters
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
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
