import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/todo",
          element: (
            <>
              <h1>To Dos</h1>
              <TodoForm />
              <TodoList />
            </>
          ),
        },

        {
          path: "/notes",
          element: (
            <>
              <h1>Notes</h1>
              <NoteForm />
              <NoteList />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      {/* providing router to render element */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
