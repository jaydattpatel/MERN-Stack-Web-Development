import "./NoteList.css";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
  const { notes } = useSelector(noteSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // getting data from server

    // fetch("https://dummyjson.com/quotes/random/5")
    //   .then((respose) => respose.json())
    //   .then((data) => {
    //     data.forEach((element) => {
    //       element.text = element.quote;
    //       element.createdOn = new Date().toDateString();
    //     });
    //     dispatch(noteActions.setInitialData(data));
    //   })
    //   .catch((err) => {
    //     console.log("Fetching error:", err);
    //   });

    axios("https://dummyjson.com/quotes/random/5")
      .then((respose) => respose.data)
      .then((data) => {
        data.forEach((element) => {
          element.text = element.quote;
          element.createdOn = new Date().toDateString();
        });
        dispatch(noteActions.setInitialData(data));
      })
      .catch((err) => {
        console.log("Fetching error:", err);
      });
  }, []);

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(noteActions.delete(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
