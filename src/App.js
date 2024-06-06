import { useState } from "react";
import "./App.css";

import Main from "./Component/MainPage/Main";
function App() {
  const list = [
    { id: 1, Content: "Complete online JavaScript course", complete: true },
    { id: 2, Content: "Jog around the park 3x", complete: false },
    { id: 3, Content: "10 minutes meditation", complete: false },
    { id: 4, Content: "Read for 1 hour", complete: false },
    { id: 5, Content: "Pick up groceries", complete: false },
    { id: 6, Content: "Complete Todo App on Frontend Mentor", complete: false },
  ];
  const [todos, setTodos] = useState(list);

  const addTodo = (newTodo) => {
    newTodo.id = todos.length + 1;
    setTodos([...todos, newTodo]);
  };

  const clearCompleted = () => {
    const Cleared = todos.filter((todo) => !todo.complete);
    setTodos(Cleared);
  };
  return <Main Todos={todos} Add={addTodo} Clear={clearCompleted} />;
}

export default App;
