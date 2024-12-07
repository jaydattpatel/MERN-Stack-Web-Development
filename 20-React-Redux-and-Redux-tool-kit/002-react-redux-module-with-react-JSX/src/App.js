import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { store } from "./redux/store";

import "./App.css";

function App() {
  return (
    <div>
      <h1>To Do App</h1>
      {/* using provider to pass store */}
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
