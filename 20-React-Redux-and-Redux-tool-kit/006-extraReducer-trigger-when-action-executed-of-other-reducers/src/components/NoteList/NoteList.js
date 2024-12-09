import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
  const { notes } = useSelector(noteSelector);
  const dispatch = useDispatch();

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
