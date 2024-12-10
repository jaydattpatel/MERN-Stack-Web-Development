import "./ToDoList.css";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { todoActions, todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {
  // using useSelector get store data
  const { todos } = useSelector(todoSelector);
  // creating dispatch to perform action
  const dispatch = useDispatch();

  useEffect(() => {
    // getting data from server

    // fetch("https://dummyjson.com/todos/random/5")
    //   .then((respose) => respose.json())
    //   .then((data) => {
    //     data.forEach((element) => {
    //       element.text = element.todo;
    //     });
    //     dispatch(todoActions.setInitialData(data));
    //   })
    //   .catch((err) => {
    //     console.log("Fetching error:", err);
    //   });

    axios("https://dummyjson.com/todos/random/5")
      .then((respose) => respose.data)
      .then((data) => {
        data.forEach((element) => {
          element.text = element.todo;
        });
        dispatch(todoActions.setInitialData(data));
      })
      .catch((err) => {
        console.log("Fetching error:", err);
      });
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                // passing action with parameters
                dispatch(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
